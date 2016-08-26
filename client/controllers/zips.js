app.controller('zipsController', function($scope, zipFactory, $location) {
  // removed sessionFactory
  $scope.zips = [];
  $scope.newZip = {
    title: '',
    vent : '',
    zip : ''
  };
  // if (!sessionFactory.session) {
  //   sessionFactory.getSession(function(session){
  //     if (!session) $location.url('/');
  //   })
  // };
  $scope.createZip = function(titleInput, ventInput, zipInput) {
		$scope.newZip.title = titleInput;
    $scope.newZip.vent = ventInput;
    $scope.newZip.zip = zipInput;
  	zipFactory.createZip($scope.newZip, function(data) {
      if(data.message){
        var err = data;
         console.log('Error Inserting New Data');
         if (err.name == 'ValidationError') {
           for (field in err.errors) {
             console.log(err.errors[field].message);
             $scope.error = err.errors[field].message;
            }
          }
      } else {
        $scope.error = data
        zipFactory.index(function(zips) {
          $scope.zips = zips;
          $location.path('/zips');
        });
      }
		})
	};
  zipFactory.index(function(zips) {
    $scope.zips = zips;
  });
});
