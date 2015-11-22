angular.module('foldKart').service('homeService', function($http,$q,constant) {
	
	this.getAllCategory = function() {
        var deferred = $q.defer();
		$http({ method: 'GET', url: constant.BASE_URL+'categories' })
		.success(function (data, status, headers, config)
		{
			deferred.resolve(data);
		})
		.error(function (data, status, headers, config)
		{
			deferred.reject(data, status, headers, config);
		})
		return deferred.promise;
    }

	this.getProducts = function() {
	    var deferred = $q.defer();
	    $http({ method: 'GET', url: constant.BASE_URL+'productses' })
	    .success(function (data, status, headers, config)
	    {
	      deferred.resolve(data);
	    })
	    .error(function (data, status, headers, config)
	    {
	      deferred.reject(data, status, headers, config);
	    })
	    return deferred.promise;
	}

});
