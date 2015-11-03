(function (angular) {
    var appmodule = angular.module('appModule', []);

    appmodule.controller("testCtrl", ["$scope", "$http" , function ($scope, $http) {
            
            $scope.jobs = [];

            $http.get('/api/jobs').then(function success(response) {
                $scope.jobs = response.data;
            },function failure(err) {
                alert(err);
            });  
    }]);

})(window.angular);
