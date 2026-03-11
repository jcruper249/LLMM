const lista = ["persona", "perro", "gato", "casa", "coche"];
function listaa() {
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
for (let i = 0; i < fruits.length; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("lista1").innerHTML = text;
for (let i = 0; i < lista.length; i++) {
    document.getElementsByTagName("p")[i].innerHTML = lista[1] +[i];
}
document.getElementById("lista-cadena").innerHTML = lista.toString();
}