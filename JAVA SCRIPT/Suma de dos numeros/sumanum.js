function sumar(){
    let num1 = parseFloat(document.getElementById("numero-a").value);
    let num2 = parseFloat(document.getElementById("numero-b").value);
    let suma = num1 + num2;
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
}