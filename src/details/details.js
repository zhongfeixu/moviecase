(function (angular) {
  var app = angular.module("details", ["sevice", "ngRoute"])
  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/details/:id", {
      templateUrl: "./details/details.html",
      controller: "movie.details"
    })
  }]);
  app.controller("movie.details", ["$scope", "$routeParams", "mySevice", function ($scope, $routeParams, mySevice) {
    $scope.isShow = true;
    mySevice.jsonp({
      url: "http://api.douban.com/v2/movie/subject/" + $routeParams.id,
      callback: function (res) {
        $scope.movie = res;
        $scope.isShow = false;
        $scope.$apply();
      }
    })
  }])

})(angular);