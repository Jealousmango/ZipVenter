app.factory('zipFactory', function($http) {
  var factory = {};

  factory.login = function(zip, cb) {
    $http.post('/zips', zip).success(function(data){
      cb(data);
    });
  };

  return factory;
});
