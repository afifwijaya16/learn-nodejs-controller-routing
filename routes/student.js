const router = require('express').Router();
var studentController = require('../controllers/studentsController');

router.get('/', studentController.index);
router.get('/add', studentController.add);
router.post('/save', studentController.save);
router.get('/edit/:studentId', studentController.edit);
router.post('/update', studentController.update);
router.get('/delete/:studentId', studentController.delete);

module.exports = router;