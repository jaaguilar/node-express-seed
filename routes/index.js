var config = require('../config');
var errors = require('./errors')

module.exports = function(app){
  //home page

  app.get('/',function(req, res){
    var options = {};
    //if debug mode we enable pretty html render
    if (config.debug) options = { pretty: true };
    res.render('home.jade',options)
  });
  //error handlers
  errors(app);
}