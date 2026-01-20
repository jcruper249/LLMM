function sumar(){
    let num1 = Number(document.getElementById("numero-a").value);
    let num2 = Number(document.getElementById("numero-b").value);
    let suma = num1 + num2;
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
    /* Number es solo para numeros enteros y parseFloat es para decimales*/
}