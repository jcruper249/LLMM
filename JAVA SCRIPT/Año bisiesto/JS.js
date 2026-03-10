function Anobisiesto(){
    let year = Number(document.getElementById("year").value);
    let resultado="Hola";
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        resultado = year + " es bisiesto.";
    }   else {
        resultado = year + " no es bisiesto.";
    }
    document.getElementById("resultado").innerHTML = resultado;
}
