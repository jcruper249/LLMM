const lista = ["persona", "perro", "gato", "casa", "coche"];
function listaa() {
for (let i = 0; i < lista.length; i++) {
    document.getElementsByTagName("p")[i].innerHTML = lista[1] +[i];
}
document.getElementById("lista-cadena").innerHTML = lista.toString();
}
