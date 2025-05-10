
//Putting basically all authentication code here so it's in one focused location.
const argon2 = require('argon2');
const { v4: uuidv4 } = require('uuid');
const prisma = require('./prismaImport');

async function passMan(uid, password) {
    //Here I must admit I'm getting a bit excessive.
    //Converting uuidv4 to hexadecimal to make it parseable by a separate function,
    //then buffering it as 16 bytes instead of a string so I can run it as an argon2id salt.
    //There's no need for any of this. Or the extremely high settings I put on argon2id. I just did it because it seemed funny to make the test passwords for this project extremely secure.
    try {
        const saltHex = uid.replace(/-/g, '');
        const salt = Buffer.from(saltHex, 'hex');
        const pword = await argon2.hash(password, {
            salt,
            memoryCost: 2**21,
            timeCost: 2, //I'm so sorry if this thing devours performance.
            parallelism: 2,
            hashLength: 64
        });
        return pword;
    } catch (err) {
        console.log(err);
    }

}

async function register(req, res) {
    try {
        res.render('register', { title: 'New User' });
    } catch (err) {
        console.log(err);
    }
}

async function newUser(req, res) {
    try {
        const { name, pass, type } = req.body;
        //Generating a uuidv4 (industry standard collision resistant user id format)
        const uid = uuidv4();
        const hashed = await passMan(uid, pass);
        await prisma.users.create({
            data: { name, type, pword: hashed }
        });
        res.redirect('/user/login');
    } catch (err) {
        console.log(err);
    }
}

async function signIn(req, res) {
    try {
        res.render('login', { title: 'Login' });
    } catch (err) {
        console.log(err);
    }
}

async function login(req, res) {
    try {
        const { name, pass } = req.body;
        const user = await prisma.users.findFirst({ where: { name } }); //EXTREMELY BAD CODE. This is basically useless for larger numbers of users unless name is always unique. This is purely to get logging in *working*, not *good*.
        const correctPass = await argon2.verify(user.pword, pass);            //I absolutely *want* to make a better login manager but that would take time I don't have and updating the user table with more security features.            
        if (correctPass) {                                              //Fun fact I spent several hours making stupid mistakes. Argon2id has it's own verifications function, and my attempt at creating one was more of a pseudorandom number generator. 
            req.session.userUid = user.uid;
            req.session.userType = user.type;
            req.session.userName = user.name;
            console.log(user.type);
            res.redirect('/courses');
        } else {
            return 0; //TODO: Replace this with an actual "passwords don't match" alert.
        }
    } catch (err) {
        console.log(err);
    }
}

async function account(req, res) {
    try {
        res.render('account', { title: 'Account' });
    } catch (err) {
        console.log(err);
    }
}

async function dash(req, res) {
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
        console.log(err);
    }
}

module.exports = {
    register,
    newUser,
    signIn,
    login,
    account,
    dash
};