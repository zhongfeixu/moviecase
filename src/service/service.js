(function (angular) {
  var mySevice = angular.module("sevice", []);
  mySevice.service('mySevice', ["$window", function ($window) {
    this.jsonp = function (option) {  
      var url = option.url + "?";
      for (var k in option.params) {
        url += k + "=" + option.params[k] + "&"
      }
      var callbackName = "jsonp_";
      callbackName += ($window.Math.random().toString().slice(2));
      url += "callback=" + callbackName;
      $window[callbackName] = option.callback;
      var script = $window.document.createElement("script");
      script.src = url;
      $window.document.body.appendChild(script);
      $window.document.body.removeChild(script);
    }
  }])
})(angular);