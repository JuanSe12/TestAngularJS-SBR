angular.module('app.global', [])
    .factory('global', global);

function global() {
    return {
        data: {},
        user: {}
    };
}