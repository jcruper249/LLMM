function mostrarParrafos() {
    const parrafos = document.getElementsByTagName("p");
for (i = 0; i < parrafos.length; i++) {
        parrafos[i].innerHTML = "Parrafo " + (i + 1);
    }
}
