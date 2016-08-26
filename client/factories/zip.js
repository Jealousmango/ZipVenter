app.factory('zipFactory', function($http, $window) {
  var factory = {};

  factory.index = function(cb) {
    $http.get('/zips').success(function(data){
      cb(data);
    });
  };
  factory.createZip = function(newZip, cb) {
      $http.post('/zips', newZip).success(function(data){
        cb(data);
      });
      // $http.get('/zips/'+ zip.zip).success(function(data){
      //   cb(data);
      // });
    };
  factory.find = function(zip_id, cb) {
    $http.get('/zips/'+ zip_id).success(function(data){
      cb(data);
    });
  };

  return factory;
});
