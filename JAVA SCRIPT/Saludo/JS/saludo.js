function saludar() {
let nombre = document.getElementById("nombre").value;

if (nombre === "") {
    document.getElementById("resultado").innerHTML = "Por favor, ingresa tu nombre.";
} else {
    document.getElementById("resultado").innerHTML = "¡Bienvenido/a, " + nombre + "!";
}
}