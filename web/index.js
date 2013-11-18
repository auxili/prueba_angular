var app = angular.module("app", [])
app.controller("indexCtrl", function($scope, $http) {

    $scope.busque = "Entidad Bancaria"
    $http.get("http://localhost:8084/daIgual/entidadesBancarias.json.jsp").success(function(resultado) {
        $scope.entidadesBancarias = resultado;
    })
    $scope.buscar = function() {
        $http.get("http://localhost:8084/daIgual/entidadesBancarias.json.jsp?nombre="+$scope.busque).success(function(result) {
            $scope.entidadesBancarias=result;
        })
    }  

})

