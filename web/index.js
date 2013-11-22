var app = angular.module("app", [])
app.controller("indexCtrl", function($scope, $http) {

    $scope.busque = "Entidad Bancaria";
    $http.get("http://localhost:8084/daIgual/entidadesBancarias.json.jsp").success(function(resultado) {
        $scope.entidadesBancarias = resultado;
    })
    // en lugar de esto hacemos una nueva pagina con su controlador
    /*ABRIR READ con window.open (NO VA)*/
    /*function read(){
        window.location='http://localhost:8084/prueba_angular/read.htm';
    }
   */
    
    $scope.read = function(entidadBancaria) {
        window.location.href="http://localhost:8084/prueba_angular/read.html?id="+entidadBancaria;
    }
    
    
    $scope.borrar = function(idEntidadBancaria) {
        $http.get("http://localhost:8084/daIgual/entidadBancariaDelete.json.jsp?id="+idEntidadBancaria).success(function(result) {
           $scope.entidadesBancarias=result;
            
        })
    }

})

