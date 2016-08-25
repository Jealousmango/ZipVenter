app.factory('sessionFactory', function($http) {
  var factory = {};
  factory.session = null;

  factory.getSession = function(cb) {
    if (factory.session) return cb(factory.session);

    $http.get('/users/session').success(function(sessionData) {
      if (sessionData.error) return cb(null);

      factory.session = sessionData;

      return cb(sessionData);
    });
  };

  return factory;
});
