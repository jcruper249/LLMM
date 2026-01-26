function Añobisiesto(year){
    let year
    let resultado
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        resultado = year + " es bisiesto."
    }   else {
        resultado = year + " no es bisiesto."
    }
}
function verificar(){
    let year
    let resultado
    if (resultado === true){
        document.getElementById("resultado").innerHTML = "El año " + year + " es bisiesto."
    }    else {
        document.getElementById("resultado").innerHTML = "El año " + year + " no es bisiesto."
    }
}