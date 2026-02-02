function generarTabla() {
    let numero = Number(document.getElementById("numero").value);
    for (let i = 1; i <= 10; i++) {
        let num = numero * i;
        resultado += numero + " X " + i + " = " + num + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}