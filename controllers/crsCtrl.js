//Controller for my starter CRUD routes regarding courses. Will update and expand later.

//Gotta put this here or everything breaks. I think.
const { PrismaClient } = require('../prismaCLI/client');
const prisma = new PrismaClient();

//Have to set these up as async I think, might just be best practices. That or the Prisma docs are on something. Either way I'm using await for prisma commands.
//And that means taking lots of inspiration from the Prisma docs and reworking all of the Node.js tutorial CRUD to be asnyc.

//Async - Get all courses.
async function allCourses(req, res) {
    try {
        const courses = await prisma.courses.findMany();
        res.render('index', { title: 'Courses', courses });
    } catch (err) {
        console.log(err)
    }
}

//Async - Get specific course by cid param.
async function getCourse(req, res) {
    try {
        const cid = req.params.cid;
        const course = await prisma.courses.findUnique({ where: { cid } });
        res.render('course', { title: 'Course', course });
    } catch (err) {
        console.log(err)
    }
}

//Async - Page for creating new course. TODO: Replace this and the edit course version.
async function newCoursePage(req, res) {
    try {
        res.render('create', { title: 'Create Course' });
    } catch (err) {
        console.log(err)
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
        console.log(err)
    }
}

//Async - Create new course and redirect.
async function createCourse(req, res) {
    try {
        //I have been forced to juggle these values manually like a common fool.
        const { cid, name, desc, cred } = req.body;
        const credInt = parseInt(cred); //Horrid little variable that will live a short and painful life.
        const course = await prisma.courses.create({ data: {cid, name, desc, cred: credInt} });
        res.redirect('/')
    } catch (err) {
        console.log(err)
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
            data: {cid, name, desc: desc || null, cred: credInt}
        }); //Might update this later too.
        res.redirect('/courses')
    } catch (err) {
        console.log(err)
    }
}

//Async - delete course and redirect.
async function deleteCourse(req, res) {
    try {
        const cid = req.params.cid;
        await prisma.courses.delete({ where: { cid } });
        res.redirect('/')
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    allCourses,
    getCourse,
    newCoursePage,
    editCoursePage,
    createCourse,
    updateCourse,
    deleteCourse
};