var app = angular.module('bankBranchCheckApp', []);

app.controller('banckBranchCheckController', function ($scope, $http) {

    $scope.names = ["Mumbai", "Banglore", "Delhi", "Pune", "Chennai", ];

    $scope.fetchCityDetails = function (selectedCity) {
        var cityNameUpperCase = selectedCity.toString().toUpperCase();
        var url = 'https://vast-shore-74260.herokuapp.com/banks?city='+cityNameUpperCase;
        $http.get(url).then(function (response) {
            $scope.objs = response.data;
            console.log($scope.objs[0]);
        });
    }
})
.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
          '<span class="highlighted">$1</span>')

        return $sce.trustAsHtml(text)
    }
});

