//Controller for my starter CRUD routes regarding courses. Will update and expand later.

//Gotta put this here or everything breaks.
const prisma = require('./prismaImport');
const { v4: uuidv4 } = require('uuid');

//Have to set these up as async I think, might just be best practices. That or the Prisma docs are on something. Either way I'm using await for prisma commands.
//And that means taking lots of inspiration from the Prisma docs and reworking all of the Node.js tutorial CRUD to be asnyc.

//Async - Get all courses.
async function allCourses(req, res) {
    try {
        const uid = req.session.userUid;
        const courses = await prisma.courses.findMany();
        let user = {};
        if (uid) {
            user = await prisma.users.findUnique({ where: { uid } });
        }
        let creatorList = [];
        const isStudent = ((uid) && (user.type === 'STUDENT'));
        for(const course of courses) {
            const rels = await prisma.ucRel.findMany({ where: { uid, cid: course.cid } })
            let isCreator = false;
            if (uid) {
                if (isStudent) {
                    for(const rel of rels) { //I separated this out because this is the same list being used for behavior it isn't supposed to be. It saves some room but is a bit confusing.
                        if (rel.rel === 'STUDENT') {
                            isCreator = true; //Basically when the user is a student, creatorList will actually be used as a list of classes the student is enrolled in.
                        }   //That way I don't need to bloat and overcomplicate this function further with more data being passed through to the .ejs, and can use fewer variables.
                    }
                } else {
                    for(const rel of rels) {
                        if (rel.rel === 'CREATOR') {
                            isCreator = true;
                        }
                    }
                    if (user.type === 'ADMIN') {
                        isCreator = true;
                    }
                }
            }
            creatorList.push({
                course: course.cid,
                isCreator
            });
        }
        res.render('index', { title: 'Courses', courses, creatorList, isStudent });
    } catch (err) {
        console.log(err);
    }
}

//Async - Get specific course by cid param.
async function getCourse(req, res) {
    try {
        const uid = req.session.userUid;
        const cid = req.params.cid;
        let user = {}
        if (uid) {
            user = await prisma.users.findUnique({ where: { uid } });
        }
        const course = await prisma.courses.findUnique({ where: { cid } });
        const rels = await prisma.ucRel.findMany({ where: { uid, cid } })
        let isCreator = false;
        if (user.type === 'ADMIN') {
            isCreator = true;
        }
        for(const rel of rels) {
            if (rel.rel === 'CREATOR') {
                isCreator = true;
            }
        }
        res.render('course', { title: 'Course', course, isCreator });
    } catch (err) {
        console.log(err);
    }
}

//Async - Page for creating new course. TODO: Replace this and the edit course version.
async function newCoursePage(req, res) {
    try {
        res.render('create', { title: 'Create Course' });
    } catch (err) {
        console.log(err);
    }
}

//Async - Page for editing existing course. TODO: No absolutely these two need to go this is so clunky and ineligant.
async function editCoursePage(req, res) {
    try {
        const cid = req.params.cid;
        const course = await prisma.courses.findUnique({ where: { cid } });
        if (!course) {
            res.status(404).render('404', { title: '404' });
        } else {
            res.render('edit', { title: 'Edit Course', course });
        }
    } catch (err) {
        console.log(err);
    }
}

//Async - Create new course and redirect.
async function createCourse(req, res) {
    try {
        //I have been forced to juggle these values manually like a common fool.
        const { cid, name, desc, cred } = req.body;
        const credInt = parseInt(cred); //Horrid little variable that will live a short and painful life.
        const course = await prisma.courses.create({ data: {
            cid,
            name,
            desc,
            cred: credInt,
            ucRel: {    //Nested creation statement to generate the creator relationship.
                create: {
                    relid: uuidv4(),
                    uid: req.session.userUid,
                    rel: 'CREATOR'
                }
            }
        } });
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
}

//Async - edit course and redirect.
async function updateCourse(req, res) {
    try {
        //I have been forced to juggle these values manually like a common fool. AGAIN!
        const cid = req.params.cid;
        const { name, desc, cred } = req.body;
        const credInt = parseInt(cred); //Horrid little variable that will live a short and painful lif
        await prisma.courses.update({ 
            where: { cid },
            data: {
                cid, 
                name, 
                desc: desc || null, 
                cred: credInt
            }
        }); //Might update this later too.
        res.redirect('/courses')
    } catch (err) {
        console.log(err);
    }
}

//Async - delete course and redirect.
async function deleteCourse(req, res) {
    try {
        const cid = req.params.cid;
        await prisma.courses.delete({ where: { cid } });
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

async function enrollUser(req, res) {
    try {
        const uid = req.session.userUid;
        const cid = req.params.cid;
        if (uid) {
            await prisma.ucRel.create({
                data: {
                    relid: uuidv4(),
                    uid,
                    cid,
                    rel: 'STUDENT'
                }
            });
            res.redirect('/user/dashboard')
        } else {
            res.redirect('/user/login')
        }
    } catch (err) {
        console.log(err);
    }
}

async function dropUser(req, res) {
    try {
        const uid = req.session.userUid;
        const cid = req.params.cid;
        if (uid) {
            await prisma.ucRel.deleteMany({
                where: {
                    uid,
                    cid,
                    rel: 'STUDENT'
                }
            });
            res.redirect('/user/dashboard')
        } else {
            res.redirect('/user/login')
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    allCourses,
    getCourse,
    newCoursePage,
    editCoursePage,
    createCourse,
    updateCourse,
    deleteCourse,
    enrollUser,
    dropUser
};

