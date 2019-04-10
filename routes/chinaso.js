
var express = require('express');
var router = express.Router();

var chinaso_controller = require('../controllers/chinaso');


router.post('/create', chinaso_controller.chinaso_create);
router.get('/:id', chinaso_controller.chinaso_details);
router.get('/', chinaso_controller.chinaso_all);
router.put('/:id/update', chinaso_controller.chinaso_update);
router.delete('/:id/delete', chinaso_controller.chinaso_delete);


module.exports = router;
