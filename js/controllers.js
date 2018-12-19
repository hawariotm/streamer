angular.module('F1FeederApp.controllers', []).

  /* Drivers controller */
  controller('driversController', function($scope, $window, $filter, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.inv = false;
    $scope.driversList = [];
    $scope.next_page = null;
    $scope.offset = ['-50%', 0, 0];
    var in_progress = true;
    $scope.searchFilter = function (driver) {
        // console.log('driver', driver);
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.name);
    };

    $scope.filterItems = function() {
        
        $scope.filtered = $filter('filter')($scope.driversList, $scope.nameFilter);
        console.log('filtered', $scope.filtered);
    }

    $window.onscroll = function() {
        console.log('driver list', $scope.driversList.length);
      };
      $scope.lineInView = function(index, inview, inviewInfo) {
         console.log('insdddddddddddd view', inview)
         if(inview) {
             if ($scope.driversList <  $scope.totalItems);
            ergastAPIservice.getDrivers($scope.url).then(function (response) {
                console.log('response', response);
                //Digging into the response to get the relevant data
                $scope.driversList = $scope.driversList.concat(response.data.page.contentItems.content);
                $scope.currentPage =  response.data.page.pageNumRequested;
                $scope.url = 'js/CONTENTLISTINGPAGE-PAGE' + ($scope.currentPage + 1) + '.json'               
            });
         }
    }



    $scope.loadImages = function() {
            var url = 'js/CONTENTLISTINGPAGE-PAGE1.json';
            ergastAPIservice.getDrivers(url).then(function (response) {
                //Digging into the response to get the relevant data
                $scope.driversList = $scope.driversList.concat(response.data.page.contentItems.content);
                // $scope.filtered    = $scope.driversList;
                $scope.totalItems = response.data.page.totalContentItems;
                $scope.currentPage =  response.data.page.pageNumRequested;
                $scope.url = 'js/CONTENTLISTINGPAGE-PAGE' + ($scope.currentPage + 1) + '.json'
                $scope.filterItems();
                $scope.inv = true;
            });
    };
    

    $scope.loadImages();
  }).

  /* Driver controller */
  controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 
  });