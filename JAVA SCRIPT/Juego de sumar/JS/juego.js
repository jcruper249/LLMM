function GenerarNumeros(){
    let numero1 = Math.floor(Math.random() * 9) + 1;
    let numero2 = Math.floor(Math.random() * 9) + 1;
    document.getElementById("numeros").innertHTML = numero1 + numero2;
}
function comprobarResultado(){
    let respuestaUsuario = Number(document.getElementById("resultado").value);
    function sumar(){
    let suma = numero1 + numero2;
    }
    if(respuestaUsuario === suma){
        alert("¡Correcto!");
    } else {
        alert("¡Incorrecto! La respuesta correcta es " + suma);
    }
}
function NuevoNumero(){
    GenerarNumeros();
}