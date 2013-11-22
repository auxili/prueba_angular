var app = angular.module("app", [])
app.controller("insertCtrl", function($scope, $http) {

    $scope.insert = function() {
        $http.get("http://localhost:8084/daIgual/entidadBancariaInsert.json.jsp?id=" + $scope.entidadBancaria.idEntidad + "&codigo=" + $scope.entidadBancaria.codigoEntidad + "&nombre=" + $scope.entidadBancaria.nombre + "cif=" + $scope.entidadBancaria.cif + "tipoEntidadBancaria=" + $scope.entidadBancaria.tipoEntidadBancaria).success(function(result) {
            $scope.entidadesBancarias = result;

        })
    }
})