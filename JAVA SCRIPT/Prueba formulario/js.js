function enviarFormulario() {
    let contraseña = document.getElementById("password").value;
        let mayuscula = /[A-Z]/.test(contraseña);
        let minuscula = /[a-z]/.test(contraseña);
        let numero = /[0-9]/.test(contraseña);
        let caracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña);
    if (contraseña.length <= 8||!mayuscula || !minuscula || !numero || !caracterEspecial   ) {
        document.getElementById("resultado").innerHTML = "Contraseña no válida. Debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial.";
        return false;
    }
    document.getElementById("resultado").innerHTML = "Contraseña válida.";
    return true;
}