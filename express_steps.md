# create project directory
mkdir _______

# Initiate json file
npm init -y

# install all libraries
npm install ________ --save
  express
  body-parser
  mongoose - spec enforcer for what can be entered in DB
  express session - sometimes
  ejs - a way to render templates : not used in Angular
  path
  fs - file system.  Allows to read/write files/folders

  'Acceptable to put them all on same line:
    npm install express body-parser ejs --save'

# Create additional necessary folders

  1. server  (( mkdir server ))
    config
    controllers  (( mkdir controllers models config ))
    models
      routes.js  (( touch routes.js))
      mongoose.js (( touch routes.js))
  2. Client ( initially called 'views' in platform)
    templates

# create server files
  server.js

# edit server.js to run app
  var express = require('express');
  var app = express();
  var bp = require('body-parser');
  var path = require('path');
  app.use(express.static(path.join(__dirname +'/views')));
  app.use(bp.urlencoded({extended: true}));
  app.set('views', path.join(__dirname + '/views'));
  app.set('view engine', 'ejs');

  require('./server/config/routes.js')


  app.listen(8000, function(){
    console.log('listening on port 8000')
  })
