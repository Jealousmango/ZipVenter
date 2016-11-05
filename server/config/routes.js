var path = require('path');
var zips = require(path.join(__dirname, '..', 'controllers', 'zips.js'))
module.exports = function(app) {
  // app.get('/zips/session', zips.session);
  // app.get('/zips', zips.index);
  // app.post('/zips', zips.login);
  // app.get('/zips/:_id', zips.find);

  app.get('/zips', zips.index);
  app.post('/zips', zips.create);
  app.get('/zips/{{zips.zip}}', zips.find);

  //get operations
  // app.get('/zips/{{zips.zip}}', zips.code);//gets all the zips for default zipcode, possibly the local zipcode
  // app.get('/zips/{{zips.fav}}', zips.fave);//gets all favorite zipcodes of specified user
  // app.get('/ziplist', zips.findall);//get list of all zips, nearby maybe?

//------------------------------------------------------------------------------------------------------------------------
  //post operations
  // app.post('/login', zips.login);
  // app.post('/reg', zips.register);
  // app.post('/{{zips.zip}}/vent', zips.create);//add vent to zipcode specified
  // app.post('/{{zips.usr}}/{{zips.zip}}', zips.addFav);//add favorite zip to user collection

//------------------------------------------------------------------------------------------------------------------------
    //put operations
    // app.put('/{{zips.usr}}/{{zips.zip}}', zips.addFav);//add favorite zip to user collection
    // app.put('/{{zips.usr}}', zips.editUsr);//edit user info

//------------------------------------------------------------------------------------------------------------------------
    //delete operations
    // app.delete('/delete/{{zips.usr}}/{{zips.vent}}', zips.delete);//delete vent from the current user
}
