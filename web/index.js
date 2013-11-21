var app = angular.module("app", [])
app.controller("indexCtrl", function($scope, $http) {

    $scope.busque = "Entidad Bancaria";
    $http.get("http://localhost:8084/daIgual/entidadesBancarias.json.jsp").success(function(resultado) {
        $scope.entidadesBancarias = resultado;
    })
    $scope.ver = function(idEntidad) {
        $http.get("http://localhost:8084/daIgual/entidadeBancaria.json.jsp?id="+idEntidad).success(function(result) {
            $scope.entidadBancaria=result;
        })
    }
    $scope.buscar = function() {
        $http.get("http://localhost:8084/daIgual/entidadesBancarias.json.jsp?nombre="+$scope.busque).success(function(result) {
            $scope.entidadesBancarias=result;
        })
    }
    $scope.borrar = function(idEntidadBancaria) {
        $http.get("http://localhost:8084/daIgual/entidadBancariaDelete.json.jsp?id="+idEntidadBancaria).success(function(result) {
           $scope.entidadesBancarias=result;
            
        })
    }

})

