var path = require('path');
var zips = require(path.join(__dirname, '..', 'controllers', 'zips.js'))
module.exports = function(app) {
    // app.get('/zips/session', zips.session);
    // app.get('/zips', zips.index);
    // app.post('/zips', zips.login);

    app.get('/zips', zips.index);
    app.post('/zips', zips.create);
    app.get('/zips/:_id', zips.find);
}
