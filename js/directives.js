'use strict';

/* Directives */


angular.module('myApp.directives', [])
.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    var raw = element[0]
    
    angular.element($window).bind("scroll", function() {
      if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
        scope.$apply(attrs.whenScrolled);
    }
      });
  };
});
