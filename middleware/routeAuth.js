//Doing this instead of running acl because it's a bit faster and more convenient. Probably less secure but with the deadline approaching my standards have to drop.
//I'll be putting custom middleware functions here for limiting editing, creation, and deletion access.
const prisma = require('../controllers/prsmCtrl');

//Basic validation for blocking students and signed-out users from accessing sensitive pages. Returns a 404 instead.
async function isTeacher(req, res, next) {
    const uid = req.session.userUid;
    console.log(req.session.userUid);
    console.log(uid);
    const user = await prisma.users.findUnique({ where: { uid } });
    const typematch = (req.session.userType == user.type);
    if (((user.type == 'TEACHER') || (user.type == 'ADMIN')) && typematch) { //prevent type spoofing (hopefully).
        return next();
    } else {
        return res.status(404).render('404', { title: '404' });
    }
}

async function loginRedir(req, res, next) {
    if (req.session.userUid) {
        res.redirect('/courses');
    } else {
        return next();
    }
}

module.exports = {
    isTeacher,
    loginRedir
    
}