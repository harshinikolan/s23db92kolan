var bird = require('../models/bird');
// List of all Costumes
exports.bird_list = function(req, res) {
res.send('NOT IMPLEMENTED: bird list');
};
// for a specific Costume.
exports.bird_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bird detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.bird_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: bird create POST');
};
// Handle Costume delete form on DELETE.
exports.bird_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bird delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.bird_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: bird update PUT' + req.params.id);
};
