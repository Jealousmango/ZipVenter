var path = require('path');


module.exports = function(app) {
    app.get('/users/session', users.session);
}
