//Doing this instead of running acl because it's a bit faster and more convenient. Probably less secure but with the deadline approaching my standards have to drop.
//I'll be putting custom middleware functions here for limiting editing, creation, and deletion access.
const prisma = require('../controllers/prismaImport');

//Basic validation for blocking students and signed-out users from accessing sensitive pages. Returns a 404 instead.
async function isTeacher(req, res, next) {
    try {
        const uid = req.session.userUid;
        const user = await prisma.users.findUnique({ where: { uid } });
        const typeMatch = (req.session.userType == user.type);
        if (((user.type == 'TEACHER') || (user.type == 'ADMIN')) && typeMatch) { //prevent type spoofing (hopefully).
            return next();
        } else {
            return res.status(404).render('404', { title: '404' });
        }
    } catch (err) {
        console.log(err);
    }
}

//Edit permissions middleware. Ensures teachers can only edit or delete courses they create. Trying to edit someone else's just makes a 404 appear.
async function editPerm(req, res, next) {
    try {
        const uid = req.session.userUid;
        if (!uid) { //Block non-logged-in users alltogether.
            return res.status(404).render('404', { title: '404' });
        }
        const cid = req.params.cid;
        const user = await prisma.users.findUnique({ where: { uid } })
        const isAdmin = (user.type === 'ADMIN');
        if (isAdmin) {
            return next(); //Skip checks for admins.
        } 
        const rels = await prisma.ucRel.findMany({ where: { uid, cid } })
        if (rels.length === 0) {    //Just getting this possibility out of the way super quick.
            return res.status(404).render('404', { title: '404' });
        }
        let isCreator = false;        
        for(const rel of rels) {
            if (rel.rel == 'CREATOR') {
                isCreator = true;
                break;
            }
        }
        if (isCreator) {
            return next();
        } else {
            return res.status(404).render('404', { title: '404' });
        }
    } catch (err) {
        console.log(err);
    }
}

//To clarify this function only exists so users don't accidentally try and sign in multiple times somehow. If something manages to send them to the login page (which shouldn't be happening anyways) then this throws them back to the homepage instead.
async function loginRedir(req, res, next) {
    if (req.session.userUid) {
        res.redirect('/courses');
    } else {
        return next();
    }
}

async function isStudent(req, res, next) {
    try {
        const uid = req.session.userUid;
        if (uid) {
            const user = await prisma.users.findUnique({ where: { uid } });
            const typeMatch = (req.session.userType == user.type);
            if (((user.type == 'STUDENT') || (user.type == 'ADMIN')) && typeMatch) {
                return next();
            }
        } else {
            res.redirect('/user/login');
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    isTeacher,
    loginRedir,
    editPerm,
    isStudent
}