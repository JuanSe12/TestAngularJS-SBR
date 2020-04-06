angular.module('app.master', [])
    .factory('masterData', masterData);

masterData.$inject = ['$http'];

function masterData($http) {

    // Local
    const URL = "https://bpmrulesruntimebpm-p2001883347trial.hanatrial.ondemand.com/rules-service/rest/v1";
    const authorization = "Basic anVhbjE0NzEyM0BnbWFpbC5jb206SnVhbnNlMTk5NTAzMTU=";

    // Despliegue
    // const URL = window.location.href.split("/webapp")[0] + "/SapBR";
    // const authorization = "Basic anVhbjE0NzEyM0BnbWFpbC5jb206SnVhbnNlMTk5NTAzMTU=";

    var service = {
        consult: consult,
        token: token
    };
    return service;

    function token() {
        return $http({
            url: URL + "/xsrf-token",
            method: "GET",
            headers: {
                "Authorization": authorization,
                'X-CSRF-Token': "Fetch"
            }
        }).success(function (data, status, headers, config) {
            return data;
        }).error(function (data, status, headers, config) {
            swal(
                `ERROR ${status}`,
                "Ocurrió un error al obtener el token.",
                "error"
            );
            return data;
        });
    }


    function consult(token, json) {
        return $http({
            url: URL + "/rule-services/java/CreditLimit/CreditLimitRuleService",
            method: "POST",
            headers: {
                "Authorization": authorization,
                'X-CSRF-Token': token
            },
            data: json
        }).success(function (data, status, headers, config) {
            return data;
        }).error(function (data, status, headers, config) {
            swal(
                `ERROR ${status}`,
                "Ocurrió un error con el servicio.",
                "error"
            );
            return data;
        });
    }

}
