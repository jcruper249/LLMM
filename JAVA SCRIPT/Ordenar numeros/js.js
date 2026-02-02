function ordenarNumeros() {
    // Obtener los valores de los inputs y convertirlos a números
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            resultado = num1 + ", " + num2 + ", " + num3;
        } else {
            resultado = num1 + ", " + num3 + ", " + num2;
        }
    }
    else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            resultado = num2 + ", " + num1 + ", " + num3;
        } else {
            resultado = num2 + ", " + num3 + ", " + num1;
        }
    }
    else {
        if (num1 >= num2) {
            resultado = num3 + ", " + num1 + ", " + num2;
        } else {
            resultado = num3 + ", " + num2 + ", " + num1;
        }
    }
    // Mostrar el resultado en el elemento con id 'resultado'
    document.getElementById('resultado').innerText = resultado;
}