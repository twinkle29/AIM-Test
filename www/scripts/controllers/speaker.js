'use strict';

angular.module('conferenceApp')
 .controller('SpeakerCtrl', function($scope, $rootScope, SetData) {
  	$scope.isCollapsed = true;
    $scope.active_speaker = "active";
    $scope.currentTab = 'speaker';
    $scope.speakers = SetData.get_speaker_data();
    $scope.speaker=$scope.speakers[0];
    
    $scope.speakerIndex = function(index) {
      $rootScope.speakerDetail = $scope.speakers[index];
    }

  });
