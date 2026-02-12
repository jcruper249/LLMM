function verificarDNI() {
    let dni = document.getElementById("dni").value;
    let esValido = validarDNI(dni);

if (esValido) {
    document.getElementById("resultado").textContent = "DNI válido";
} 
else {
    document.getElementById("resultado").textContent = "DNI inválido"; 
}
}

function validarDNI(dni) {
    if (dni.length !== 9) {
        return false;
    }
    for (let i = 0; i < dni.length -1; i++) {
        if (dni.charAt(i) < '0' || dni.charAt(i) > '9') {
            return false;
        }
}
    let letra = dni.charAt(8).toUpperCase();
    if (letra < 'A' || letra > 'Z') {
        return false;
    }  
        return true; 
    }