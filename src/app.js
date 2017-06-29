(function (angular) {
    var app = angular.module("moviecat", [
        "home",
        "details",
        "move_list",
        "sevice",
        "ngRoute"
    ]);
    app.config(["$locationProvider", function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
    //我们为我们的导航条指令
    app.directive("changeShow", function () {
        return {
            restrict: "EA",
            link: function (scope, ele, attrs) {
                var $ele = angular.element(ele);
                $ele.on("click", function () {
                    $ele.parent().children().removeClass("active");
                    $ele.addClass("active")
                })
            }
        }

    })
    app.controller("searchController", ["$scope", "$window", "$routeParams", "mySevice", function ($scope, $window, $routeParams, mySevice) {
        $scope.type = "1";
        $scope.showOut = function (type) {
            $scope.type = type;
        }
        $scope.search = function () {
            $window.location.href = "./#/search?q=" + $scope.keyWords;
        }
    }]);
})(angular);