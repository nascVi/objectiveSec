// server.js

// DEPENDENCIES AND SETUP
// ===============================================

var express = require('express'),
  app = express(),
  port = Number(process.env.PORT || 8080);

// DATABASE
// ===============================================

// Setup the database.
var Datastore = require('nedb');
var db = new Datastore({
  filename: 'objectives.db', /* provide a path to the 
database 
file*/ 
  autoload: true, // automatically load the database
  timestampData: true /* automatically add and manage 
the 
fields createdAt and updatedAt*/
});

// Check one can save to the database.
// name an objective.
var objective = {
  description: 'Do 10 minutes for a nap every day',
};

// Save this goal to the database.
db.insert(objective, function(err, newObjective) {
  if (err) console.log(err);
  console.log(newObjective);
});

// ROUTES
// ===============================================

// Define the home page route.
app.get('/', function(req, res) {
  res.send('Our first route is working. :)');
});

// START THE SERVER
// ===============================================

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
