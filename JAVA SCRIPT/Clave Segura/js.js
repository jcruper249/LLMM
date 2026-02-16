    // Minimo 8 caracteres
    // Al menos una letra mayúscula
    // Al menos una letra minúscula
    // Al menos 1 digito (0-9)
function ValidarClave() {
    let clave = document.getElementById("password").value;
    let mayuscula = /[A-Z]/.test(clave);
    let minuscula = /[a-z]/.test(clave);
    let digito = /[0-9]/.test(clave);
    if (clave.length < 8) {
        document.getElementById("resultado").innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    }
    if (!mayuscula || !minuscula || !digito) {
        document.getElementById("resultado").innerHTML = "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un dígito.";
        return false;
    }
    document.getElementById("resultado").innerHTML = "Contraseña válida.";
    return true;
}