var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

var models_path = path.join(__dirname, '..', 'models');

fs.readdirSync(models_path).forEach(function(file){
  require(models_path + '/' + file);
});
