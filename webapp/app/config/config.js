/*Modulo Configuración*/
angular.module('app.config', ['ngRoute'])
    .config(config);

/*Injección de dependencias*/
config.$inject = ['$routeProvider'];

function config($routeProvider) {


    $routeProvider
        .when('/form', {
            templateUrl: 'app/views/form.html',
            controller: 'cvForm',
            controllerAs: 'vmForm'
        })
        .otherwise({
            redirectTo: "/form"
        });

}
