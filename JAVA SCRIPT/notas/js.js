function notas() {
    let nota = parseFloat(document.getElementById("nota").value);
    let resultado
    if (nota >= 9) {
        resultado = "sobresaliente"
    } else if (nota >= 7) {
        resultado = "notable"
    } else if (nota >= 6) {
        resultado = "bien"
    } else if (nota >= 5) {
        resultado = "suficiente"
    } else {
        resultado = "suspenso"
    }
    document.getElementById("resultado").innerHTML = resultado;
}