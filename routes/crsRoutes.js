//Almost identical to the Node.js tutorial version but what do you want from me? This file is comically simple.

const express = require('express');
const crsCtrl = require('../controllers/crsCtrl');
const router = express.Router();
const methodOverride = require('method-override');
const routeAuth = require('../middleware/routeAuth');

router.use(methodOverride('_method')); //I'm tempted to try and put this somewhere else so it goes off with all the server's other middleware but I'm scared I'll break something.

//Re-organized around level of permissions required.
router.get('/', crsCtrl.allCourses);

router.get('/create', routeAuth.isTeacher, crsCtrl.newCoursePage);
router.post('/', routeAuth.isTeacher, crsCtrl.createCourse);

router.get('/:cid', crsCtrl.getCourse);

router.get('/:cid/edit', routeAuth.isTeacher, routeAuth.editPerm, crsCtrl.editCoursePage);
router.put('/:cid', routeAuth.isTeacher, routeAuth.editPerm, crsCtrl.updateCourse);
router.delete('/:cid', routeAuth.isTeacher, routeAuth.editPerm, crsCtrl.deleteCourse);

module.exports = router;