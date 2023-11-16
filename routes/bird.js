var express = require('express');
const bird_controlers= require('../controllers/bird');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bird', { title: 'Search results bird' });
// });

router.get('/', bird_controlers.bird_view_all_Page );


/* GET detail costume page */
router.get('/detail', bird_controlers.bird_view_one_Page);

// GET request for one costume.

router.get('/birds/:id', bird_controlers.bird_detail);

/* GET create costume page */
router.get('/create', bird_controlers.bird_create_Page);

/* GET create update page */
router.get('/update', bird_controlers.bird_update_Page);

/* GET delete costume page */
router.get('/delete', bird_controlers.bird_delete_Page);


module.exports = router;