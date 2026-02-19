    // Minimo 8 caracteres 
    // 1 letra mayúscula al final.
    // Sin espacios ni caracteres adicionales. 
function ValidarDNI() {
    var dni = document.getElementById("DNI").value;
    var min8Cacter = /^.{8}$/.test(dni); // Valida que tenga al menos 8 caracteres (Solo numeros)
    var letraMayusculaF = /.[A-Z]$/.test(dni); // Valida que tenga letra mayúscula sea al final de la cadena de caracteres
    var sinmayor9 = /^[^{9}$]+$/.test(dni); // Valida que no tenga una longitud mayor a 9
    var signos = /[!-/]&[:-@]/.test(dni); // Valida si tiene caracteres especiales (No todos)
    var espacios = /\s/.test(dni); // Valida si tiene espacios en blanco
    if (!min8Cacter || !letraMayusculaF || !sinmayor9 || signos || espacios) {
        document.getElementById("resultado").innerHTML = "DNI no válido.";
        return false;
    }
    document.getElementById("resultado").innerHTML = "DNI válido.";
    return true;
}