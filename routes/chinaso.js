//app.METHOD(PATH, HANDLER)
/*
app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.


app.get('/', function (req, res) {
  res.send('Hello World!')
})
*/
var express = require('express');
var router = express.Router();

var chinaso_controller = require('../controllers/chinaso');


router.post('/create', chinaso_controller.chinaso_create);
router.get('/:id', chinaso_controller.chinaso_details);
router.get('/chinasos', chinaso_controller.chinaso_all);
router.put('/:id/update', chinaso_controller.chinaso_update);
router.delete('/:id/delete', chinaso_controller.chinaso_delete);


module.exports = router;
