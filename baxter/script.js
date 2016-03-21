var moduleA = angular.module("MyModuleA", []);
moduleA.controller("NowShowing", function($scope) {
    $scope.templates =
      [ { name: 'now-showing.html', url: 'now-showing.html'}];
    $scope.template = $scope.templates[0];
});

var moduleB = angular.module("MyModuleB", []);
moduleB.controller("ComingSoon", function($scope) {
	alert("this is working");
    $scope.templates =
      [ { name: 'coming-soon.html', url: 'coming-soon.html'}];
    $scope.template = $scope.templates[0];
});

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("now-showing"), ["MyModuleA"]);
    angular.bootstrap(document.getElementById("coming-soon"), ["MyModuleB"]);
});