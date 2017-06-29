(function (angular) {
  var move_list = angular.module("move_list", ["sevice", "ngRoute"]);
  move_list.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/:keywords/:page?", {
      templateUrl: "./movie_list/movie_list.html",
      controller: "movie_coming"
    })
  }])
  move_list.controller("movie_coming", ["$scope", "$http", "mySevice", "$routeParams", "$window", "$route", function ($scope, $http, mySevice, $routeParams, $window, $route) {
    $scope.isShow = true;
    console.log($routeParams.keywords)
    console.log($routeParams.page);
    console.log($routeParams.q);

    $scope.pageSize = +($routeParams.page || "1");
    $scope.pageCount = 20;

    mySevice.jsonp({
      url: "http://api.douban.com/v2/movie/" + $routeParams.keywords,
      params: {
        q: $routeParams.q,
        count: $scope.pageCount,
        start: $scope.pageSize * ($scope.pageSize - 1)
      },
      callback: function (res) {
        $scope.movieData = res;
        $scope.totalCount = $window.Math.ceil(res.total / $scope.pageCount);
        $scope.isShow = false;
        $scope.$apply();
        console.log($scope.totalCount);
      }
    });

    $scope.getPage = function (pageSize) {
      if (pageSize < 1 || pageSize > $scope.totalCount) return;
      $route.updateParams({
        page: pageSize,
      })
    }
  }]);
})(angular);