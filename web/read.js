var app = angular.module("app", [])
app.controller("readCtrl", function($scope, $http) {

    function getQueryStringParameters() {
        var queryString = window.location.search.substr(1); //El substr(1) es para quitarel "?" del principio;
        var parejaParametros = queryString.split('&');

        var parametros = {};

        if (parejaParametros !== "") {
            for (var i = 0; i < parejaParametros.length; ++i)
            {
                var parejaParametro = parejaParametros[i].split('=');
                if (parejaParametro.length === 2) {
                    var nombre = parejaParametro[0];
                    var valor = decodeURIComponent(parejaParametro[1].replace(/\+/g, " "));
                    parametros[nombre] = valor;
                }
            }
        }


        return parametros;
    }
    ;
    $http.get("http://localhost:8084/daIgual/entidadeBancaria.json.jsp?id=" + q).success(function(result) {
        $scope.entidadBancaria = result;
    })

})