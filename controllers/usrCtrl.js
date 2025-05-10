
//Putting basically all authentication code here so it's in one focused location.
const argon2 = require('argon2');
const { v4: uuidv4 } = require('uuid');
const prisma = require('./prismaImport');

//This is the main part of the file that isn't self-explanatory: Originally I had no idea Argon2id handled salts automatically, because I was speed-reading the documentation and not paying attention.
//As a result, I implemented passMan, a function who's entire purpose is to use the user's uuidv4 as the argon2id salt instead. This caused significant unexpected behavior until I figured out my error.
//Unfortunately now I'm at a point where reworking this would be more difficult than leaving it as-is. Lesson learned for the future, I guess.
async function passMan(uid, password, next) {
    try {
        const saltHex = uid.replace(/-/g, '');
        const salt = Buffer.from(saltHex, 'hex');
        const pword = await argon2.hash(password, { //Argon2id configs.
            salt, //Special and completely unnecessary salt using the user's uuidv4 user ID. Originally included when I thought argon2 would require me to provide my own hash as a way to save myself some database fiddling.
            memoryCost: 2**21, //2Gib hangs for about 30 seconds. Too scared to change this in case I break old passwords.
            timeCost: 2, //I'm so sorry if this thing devours your CPU whole.
            parallelism: 2,
            hashLength: 64
        });
        return pword;
    } catch (err) {
        next(err);
    }

}

async function register(req, res, next) {
    try {
        res.render('register', { title: 'New User' });
    } catch (err) {
        next(err);
    }
}

async function newUser(req, res, next) {
    try {
        const { name, pass, type } = req.body;
        const userExists = await prisma.users.findFirst({ where: { name } });
        if (userExists) {
            req.session.error = 'Username taken, please try something else.';
            return res.redirect('/users/register');
        }
        //Generating a uuidv4 (industry standard collision resistant user id format)
        const uid = uuidv4();
        const hashed = await passMan(uid, pass);
        await prisma.users.create({
            data: { name, type, pword: hashed }
        });
        res.redirect('/user/login');
    } catch (err) {
        next(err);
    }
}

async function signIn(req, res, next) {
    try {
        res.render('login', { title: 'Login' });
    } catch (err) {
        next(err);
    }
}

async function login(req, res, next) {
    try {
        const { name, pass } = req.body;
        const user = await prisma.users.findFirst({ where: { name } }); //EXTREMELY BAD CODE. This is basically useless for larger numbers of users unless name is always unique. This is purely to get logging in *working*, not *good*.
        //I'm too tired and close to the deadline to change usernames on the database side, but suffice to say names should be unique in this system.
        if (!user) {
            req.session.error = 'User not found.';
            return res.redirect('/user/login');
        }
        
        const correctPass = await argon2.verify(user.pword, pass);            //I absolutely *want* to make a better login manager but that would take time I don't have and updating the user table with more security features.            
        if (!correctPass) {                                              //Fun fact I spent several hours making stupid mistakes. Argon2id has it's own verifications function, and my attempt at creating one was more of a pseudorandom number generator. 
            req.session.error = 'Invalid password.';
            return res.redirect('/user/login');
        }

        req.session.userUid = user.uid;
        req.session.userType = user.type;
        req.session.userName = user.name;
        console.log(user.type);
        res.redirect('/courses');
    } catch (err) {
        next(err);
    }
}

async function account(req, res, next) {
    try {
        res.render('account', { title: 'Account' });
    } catch (err) {
        next(err);
    }
}

async function dash(req, res, next) {
    try {
        const uid = req.session.userUid;
        const courses = await prisma.courses.findMany({ //Just figured out I could do this. I need to use this expanded object structure more.
            where: {
                ucRel: {
                    some: {
                        uid,
                        rel: 'STUDENT'
                    }
                }
            }
        });
        res.render('stuDash', { title: 'Student Dashboard', courses })
    } catch (err) {
        next(err);
    }
}

async function logOut(req, res, next) {
    try {
        req.session.destroy(err => {
            if (err) {
                return res.redirect('/courses');
            }
            res.clearCookie('connect.sid'); //Theoretically this is where express-session puts the cookies, and this function just nukes them, throws an error if there isn't a session running, and sends the user back to index.
            res.redirect('/courses'); //Not that I get all of that, but it makes sense, I guess.
        })
    } catch (err) {
        next(err);
    }
}

module.exports = {
    register,
    newUser,
    signIn,
    login,
    account,
    dash,
    logOut
};