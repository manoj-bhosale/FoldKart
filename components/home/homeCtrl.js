angular.module('foldKart').controller('homeController', function($scope,$rootScope,$filter,homeService) {
	
	$scope.getAllCategory = function() {
		homeService.getAllCategory().then(function(data){
			$scope.allCategory = data;
		})
	}
	$scope.getAllCategory();

	$scope.getAllProducts = function() {
		$scope.isLoading = true;
        homeService.getProducts().then(function(data) {
          	$scope.allProducts = data;
          	$scope.filteredProducts = $scope.allProducts;
          	$scope.isLoading = false;
		});
	}
	$scope.getAllProducts();

	$scope.getProductsByCategory = function(category) {
		$scope.filteredProducts = $filter('filter')($scope.allProducts, { category: category })
	}

});
