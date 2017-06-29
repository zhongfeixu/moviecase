(function (angular) {
  var home = angular.module("home", ["ngRoute"])
  home.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home", {
      templateUrl: "./home/home.html"
    }).when("/", {
      redirectTo: "/home"
    })
  }])
})(angular);