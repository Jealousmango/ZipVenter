app.controller('zipsController', function($scope, zipFactory, $location, $window) {
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
  $scope.createZip = function(titleInput, ventInput, zipInput, $window) {
		$scope.newZip.title = titleInput;
    $scope.newZip.vent = ventInput;
    $scope.newZip.zip = zipInput;
  	zipFactory.createZip($scope.newZip, function(data) {
      zipFactory.index(function(zips) {
        $scope.zips = zips;
        // $window.location.href = '#/zips.html';
      });
		})
	};
  zipFactory.index(function(zips) {
    console.log('hit zipFactory.index in zips controllers');
    $scope.zips = zips;
  });
});
