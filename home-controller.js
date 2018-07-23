angular.module('app').controller("homeCtrl", function ($scope, $http, $state) {
    $scope.isList = true;
    $scope.init = function () {
        $http.get('data.json').then(function (res) {

            $scope.categories = _.groupBy(res.data.result, function (entry) {
                return entry.Type;
            })

        }, function (err) {
            if (err.status == 404) {
                alert("no resource found");
            }
            $state.go('error')
        });
    }

    $scope.selectCat = function (key, data) {
        $scope.cat_data = data;
        $scope.selectedKey = key;
    }

    $scope.getYear = function (year) {
        return year.substring(0, 4);
    }

    $scope.changeView = function () {
        $scope.isList= !$scope.isList;
    }

});