angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Documents) {
  $scope.documents = Documents.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Documents) {
  $scope.document = Documents.get($stateParams.documentId);
})

.controller('AccountCtrl', function($scope) {
});
