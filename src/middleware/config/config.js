const fs = require('fs');
const path = require('path');
const models_path = __dirname + '/../models';
const models = fs.readdirSync(models_path);

models.forEach(function (file) {
  if (~file.indexOf('.js')) {
    console.log('Trying to require %s',file);
    require(models_path + '/' + file);
  }
});
