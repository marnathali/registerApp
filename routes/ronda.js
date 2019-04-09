var express = require('express');
var router = express.Router();

var ronda_controller = require('../controllers/ronda');


router.post('/create', ronda_controller.ronda_create);
router.get('/:id', ronda_controller.ronda_details);
router.put('/:id/update', ronda_controller.ronda_update);
router.delete('/:id/delete', ronda_controller.ronda_delete);

module.exports = router;
