var express = require('express');
var router = express.Router();
var juez_controller = require('../controllers/juez');


router.post('/create', juez_controller.juez_create);

router.get('/:id', juez_controller.juez_details);

router.put('/:id/update', juez_controller.juez_update);

router.delete('/:id/delete', juez_controller.juez_delete);


module.exports = router;
