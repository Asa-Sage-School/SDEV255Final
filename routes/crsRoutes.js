//Boilerplate router for course system.

const express = require('express');
const crsCtrl = require('../controllers/crsCtrl');
const router = express.Router();
const methodOverride = require('method-override');
const routeAuth = require('../middleware/routeAuth');

router.use(methodOverride('_method')); //This just has to go here. I think...

//Re-organized around level of permissions required. Vaguely. Also partitioned by general purpose and routing constraints, that way nothing breaks and it's easy to find related functions. (usually)
router.get('/', crsCtrl.allCourses);

router.get('/create', routeAuth.isTeacher, crsCtrl.newCoursePage);
router.post('/', routeAuth.isTeacher, crsCtrl.createCourse);

router.get('/:cid', crsCtrl.getCourse);

router.get('/:cid/edit', routeAuth.isTeacher, routeAuth.editPerm, crsCtrl.editCoursePage);

router.post('/:cid/enroll', routeAuth.isStudent, crsCtrl.enrollUser);
router.post('/:cid/drop', routeAuth.isStudent, crsCtrl.dropUser);

router.put('/:cid', routeAuth.isTeacher, routeAuth.editPerm, crsCtrl.updateCourse);
router.delete('/:cid', routeAuth.isTeacher, routeAuth.editPerm, crsCtrl.deleteCourse);

module.exports = router;