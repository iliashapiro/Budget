app.controller('Temp1Ctrl', ['$scope', '$rootScope', '$tm1Ui', function($scope, $rootScope, $tm1Ui) {
	$scope.values = {};
	$scope.lists = {};
	
	$scope.values.dimension = 'Time';
	$scope.lists.hierarchies = [];
	
	$scope.checkInfo = function(){
	  $tm1Ui.dimensionHierarchies('dev', $scope.values.dimension).then(function(result){
		  $scope.lists.hierarchies.length = 0;
		  $scope.lists.hierarchies = _.cloneDeep(result);		  
		  console.info(result);
	  });
	};
	
	$scope.checkHierarchy = function(hierarchy){
		$tm1Ui.dimensionHierarchy('dev', $scope.values.dimension, hierarchy).then(function(result){
			  console.info(result);
		});
	};
}]);
