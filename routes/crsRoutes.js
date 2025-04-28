//Almost identical to the Node.js tutorial version but what do you want from me? This file is comically simple.

const express = require('express');
const crsCtrl = require('../controllers/crsCtrl');
const router = express.Router();
const methodOverride = require('method-override');

router.use(methodOverride('_method')); //I'm tempted to try and put this somewhere else so it goes off with all the server's other middleware but I'm scared I'll break something.

router.get('/', crsCtrl.allCourses);

router.post('/', crsCtrl.createCourse);
router.get('/create', crsCtrl.newCoursePage);

router.get('/:cid/edit', crsCtrl.editCoursePage);
router.put('/:cid', crsCtrl.updateCourse);

router.get('/:cid', crsCtrl.getCourse);

router.delete('/:cid', crsCtrl.deleteCourse);

module.exports = router;