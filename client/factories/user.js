app.factory('userFactory', function($http) {
  var factory = {};

  factory.login = function(user, cb) {
    $http.post('/users', user).success(function(data){
      cb(data);
    });
  };

  return factory;
});
