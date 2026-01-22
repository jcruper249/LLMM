function sumar(){
    let num1 = Number(document.getElementById("numero-a").value);
    let num2 = Number(document.getElementById("numero-b").value);
    let suma = num1 + num2;
    let result;
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
    if (num1%2 === 0 ){
        result+=" y " + num1 + " es un numero par"; 
    }
    else {
        result+=" y " + num1 + " es un numero impar"; 
    }
    document.getElementById("resultado").innerHTML = result;
    /* Number es solo para numeros enteros y parseFloat es para decimales*/
}