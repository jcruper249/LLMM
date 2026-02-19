    // Minimo 8 caracteres
    // Al menos una letra mayúscula
    // Al menos una letra minúscula
    // Al menos 1 digito (0-9)
    // .test() valida si el patrón se encuentra en la cadena de caracteres anteriormente definida
function ValidarClave() {
    let clave = document.getElementById("password").value;
    let mayuscula = /[A-Z]/.test(clave);
    let minuscula = /[a-z]/.test(clave);
    let digito = /[0-9]/.test(clave);
    // Valida la longitud si es menor que 8 no es valido
    if (clave.length < 8) {
        document.getElementById("resultado").innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    }
    // Valida si no tiene mayuscula, minuscula o digito no es valido
    if (!mayuscula || !minuscula || !digito) {
        document.getElementById("resultado").innerHTML = "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un dígito.";
        return false;
    }
    // Devuleve verdadero si no se incumple ninguna condición
    document.getElementById("resultado").innerHTML = "Contraseña válida.";
    return true;
}