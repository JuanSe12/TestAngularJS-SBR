//Validar si un string contiene solo números
function expNumber(numero) {
    var regex = /^([0-9])*$/;
    return regex.test(numero);
}
