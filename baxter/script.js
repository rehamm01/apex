(function(angular) {
  'use strict';
angular.module('includeBody', ['ngAnimate'])
  .controller('NowShowing', ['$scope', function($scope) {
    $scope.templates =
      [ { name: 'now-showing.html', url: 'now-showing.html'}];
    $scope.template = $scope.templates[0];
  }]);

  .controller('ComingSoon', ['$scope', function($scope) {
    $scope.templates =
      [ { name: 'coming-soon.html', url: 'coming-soon.html'}];
    $scope.template = $scope.templates[1];
  }]);
})(window.angular);