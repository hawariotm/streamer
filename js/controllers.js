angular.module('Streamer.controllers', []).

  /* streamer controller */
  controller('streamerController', function ($scope, $window, $filter, APIservice) {
    $scope.nameFilter = null;
    $scope.contents = [];
    $scope.next_page = null;
    $scope.iconClicked = false;

    $scope.searchFilter = function (content) {
      var re = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || re.test(content.name);
    };


    $scope.toggleView = function () {
      var name = document.getElementById("input");
      $scope.iconClicked = !$scope.iconClicked;
      if ($scope.iconClicked) {
        name.focus();
      }
    }

    $scope.lineInView = function (index, inview, inviewInfo) {
      if (inview) {
        if ($scope.contents < $scope.totalItems);
        APIservice.getDrivers($scope.url).then(function (response) {
          if (response) {
            $scope.contents = $scope.contents.concat(response.data.page.contentItems.content);
            $scope.currentPage = response.data.page.pageNumRequested;
            $scope.url = 'js/CONTENTLISTINGPAGE-PAGE' + ($scope.currentPage + 1) + '.json'
          }
        });
      }
    }



    $scope.loadImages = function () {
      var url = 'js/CONTENTLISTINGPAGE-PAGE1.json';
      APIservice.getDrivers(url).then(function (response) {
        $scope.contents = $scope.contents.concat(response.data.page.contentItems.content);
        $scope.totalItems = response.data.page.totalContentItems;
        $scope.currentPage = response.data.page.pageNumRequested;
        $scope.url = 'js/CONTENTLISTINGPAGE-PAGE' + ($scope.currentPage + 1) + '.json'
      });
    };

    $scope.loadImages();
  });