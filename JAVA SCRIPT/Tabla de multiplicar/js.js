function generarTabla() {
    let numero = Number(document.getElementById("numero").value);
    let resultado = "<ul>";
    for (let i = 1; i <= 10; i++) {
        let num = numero * i;
        resultado += "<li>" + numero + " X " + i + " = " + num + "</li>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}