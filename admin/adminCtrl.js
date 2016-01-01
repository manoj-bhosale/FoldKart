angular.module('foldKartAdmin', []).controller('adminController', function($scope, adminService) {

    /* Open the admin login modal */
    $('#adminLoginModal').modal('show');

    $scope.adminLogin = function() {
        adminService.adminLogin($scope.admin).then(function(data) {
            if (data === undefined) {
                alert("Invalid User or Password !");
            } else {
                $scope.admin = data;

                $scope.getAllCategory();

                $('#adminLoginModal').removeAttr("data-keyboard");
                $('#adminLoginModal').removeAttr("data-backdrop");
                $('#adminLoginModal').modal('hide');
            }
        })
    };

    $scope.getAllProducts = function() {
        adminService.getAllProducts().then(function(data) {
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < $scope.allCategory.length; j++) {
                    if (data[i].category === $scope.allCategory[j].id) {
                        data[i].categoryName = $scope.allCategory[j].category;
                    }
                }
            }

            $scope.allProducts = data;
        });
    };

    $scope.getAllCategory = function() {
        adminService.getAllCategory().then(function(data) {
            $scope.allCategory = data;

            $scope.getAllProducts();
        });
    };

    $scope.adminLogout = function() {
        $scope.admin = {};
        location.reload();
    };

});
