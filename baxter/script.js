var moduleA = angular.module("MyModuleA", []);
moduleA.controller("NowShowing", function($scope) {
    $scope.templates =
      [ { name: 'template1.html', url: 'template1.html'}];
    $scope.template = $scope.templates[0];
});

var moduleB = angular.module("MyModuleB", []);
moduleB.controller("ComingSoon", function($scope) {
    $scope.templates =
      [ { name: 'template2.html', url: 'template2.html'}];
    $scope.template = $scope.templates[0];
});

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("now-showing"), ["MyModuleA"]);
    angular.bootstrap(document.getElementById("coming-soon"), ["MyModuleB"]);
});