/*global angular*/

(function withAngular(angular) {

  'use strict';

  angular.module('720kb.background', [])
  .directive('dynamicBackground', [function () {
  return {
    'restrict': 'A',
    'link': function ($scope, element, attrs) {

      $scope.setBg = function manageSetBg() {

       angular.element(element[0]).css({
        'background-color':attrs.backgroundColor,
        'background-image':'url(' + attrs.backgroundImage + ')',
        'background-repeat': attrs.backgroundRepeat,
        'background-position': attrs.backgroundPosition,
        'background-size': attrs.backgroundSize,
        'background-attachment': attrs.backgroundAttachment,
        'background-origin': attrs.backgroundOrigin,
        'background-clip': attrs.backgroundClip,
        'background': attrs.background
       });
      };

      $scope.launchDynamicBg = function manageLaunchDynamicBg () {

        if (attrs.backgroundOnEvent) {

          angular.element(element[0]).bind(attrs.backgroundOnEvent, function () {

            $scope.setBg();
          });
        } else {

          $scope.setBg();
        }
      }

      angular.forEach([
        'backgroundImage',
        'backgroundColor',
        'backgroundSize',
        'backgroundPosition',
        'backgroundClip',
        'backgroundAttachment',
        'backgroundOnEvent',
        "backgroundRepeat",
        'backgroundOrigin',
        'background'
        ], function (value, key) {

        attrs.$observe(value, function(val){

          if (val) {
            console.log(val);
            $scope.launchDynamicBg();
          }
        });
      });
    }
  };
  }]);
}(angular));
