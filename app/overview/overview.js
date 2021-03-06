angular.module('myApp.overview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    templateUrl: 'overview/overview.html',
    controller: 'overviewCtrl'
  });
}])

.controller('overviewCtrl', function($scope, $http, $window) {
    $http.get(APP_BASE_URL + "/getProductGroups")
    .then(function(response) {
        $scope.productGroupList  = response.data;
    });

    // console.log("Products List:" + $scope.productGroupList);

    // $http.get(APP_BASE_URL + "/getProductGroups")
    // .then(function(response) {
    //     // console.log(JSON.stringify(response.data.textualDescription));
    //     // $scope.polDetails = response.data;
    //     $scope.productGroupList = response.data;
    //     alert("Data has been Fetched successfully:" + JSON.stringify(response.data));
    // });

    //     // $http.post("http://13.234.59.233:8085/ISmart/api/makeTransaction", paymentObject)
    //     // .then(function (response) {
    //     //     alert("Data has been submitted successfully:" + JSON.stringify(response));
    //     // });
    // }

    $scope.selectedProduct = function($event) {
      console.log("Selected Product:" + $event.target.id);
      $http.get(APP_BASE_URL + "/getProductDetail/" + $event.target.id)
      .then(function(response) {
        // alert("Data has been submitted successfully:" + JSON.stringify(response.data));
          $scope.productDetailData = response.data;
      });
    }
});