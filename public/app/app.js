(function (angular) {
    var appmodule = angular.module('appModule', []);

    appmodule.controller("testCtrl", ["$scope", function ($scope) {
        $scope.jobs = [];
    }]);

})(window.angular);
