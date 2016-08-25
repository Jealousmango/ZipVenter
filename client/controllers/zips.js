app.controller('zipsController', function($scope, sessionFactory, zipFactory, $location) {
  $scope.zips = [];
  $scope.newZip = {
    title: '',
    vent : '',
    zip : ''
  };
  if (!sessionFactory.session) {
    sessionFactory.getSession(function(session){
      if (!session) $location.url('/');
    })
  };
  $scope.createZip = function(zipInput) {
		$scope.newZip.title = zipInput;
  	zipFactory.createZip($scope.newZip, function(data) {
      zipFactory.index(function(zips) {
        $scope.zips = zips;
      });
		})
	};
  zipFactory.index(function(zips) {
    $scope.zips = zips;
  });
});
