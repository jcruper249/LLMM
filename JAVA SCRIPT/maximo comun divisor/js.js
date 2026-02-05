function averiguar() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var resultado = 0;
    while (num2 !== 0) {
        resultado = num2;
        num2 = num1 % num2;
        num1 = resultado;
    }
    document.getElementById("result").innerHTML = "El MCD es: " + num1;
}