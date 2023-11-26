const botonComenzar = document.getElementById("Comenzar");
const formUsu = document.getElementById("numeroUsuario");
let numeroAleatorio = 0;
function numAleatorio() {
  numeroAleatorio = Math.floor(Math.random() * 50) + 1;
  botonComenzar.className = "btn btn-danger disabled";
  formUsu.className = "my-3";
}
function numeroUsu(e) {
    e.preventDefault();
}
botonComenzar.addEventListener("click", numAleatorio);
formUsu.addEventListener("submit", numeroUsu);
