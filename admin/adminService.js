angular.module('foldKartAdmin')
    .service('adminService', function($http, $q) {

        this.adminLogin = function(admin) {
            var deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: 'https://my-selfie-tech-login.apispark.net/v5/admins'
                })
                .success(function(data, status, headers, config) {
                    deferred.resolve(findUser(data, admin));
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data, status, headers, config);
                })
            return deferred.promise;
        };

        var findUser = function(data, admin) {
            return _.find(data, function(user) {
                return (user.name === admin.name && user.password === admin.password)
            });
        };

        this.getAllProducts = function() {
            var deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: 'https://my-selfie-tech-login.apispark.net/v5/productses'
                })
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data, status, headers, config);
                })
            return deferred.promise;
        };

        this.getAllCategory = function() {
            var deferred = $q.defer();
            $http({
                    method: 'GET',
                    url: 'https://my-selfie-tech-login.apispark.net/v5/categories'
                })
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject(data, status, headers, config);
                });

            return deferred.promise;
        };

    });
