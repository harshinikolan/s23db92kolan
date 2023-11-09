var express = require('express');
const bird_controlers= require('../controllers/bird');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bird', { title: 'Search results bird' });
// });

router.get('/', bird_controlers.bird_view_all_Page );
module.exports = router;
