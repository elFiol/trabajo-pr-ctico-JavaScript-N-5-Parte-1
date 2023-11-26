const botonComenzar = document.getElementById("Comenzar");
const formUsu = document.getElementById("numeroUsuario");
let numeroAleatorio;
function numAleatorio() {
  numeroAleatorio = Math.floor(Math.random() * 50) + 1;
  botonComenzar.className = "btn btn-danger disabled";
  formUsu.className = "my-3";
}
function numeroUsu(e) {
  e.preventDefault();
  const inputBusqueda = document.querySelector("input");
  const numeroIngresado = parseInt(inputBusqueda.value);
  if (numeroIngresado === numeroAleatorio) {
    alert("felicidades, el numero aleatorio fue " + numeroAleatorio);
  } else {
    if (numeroIngresado > numeroAleatorio) {
      alert("el numero ingresado es mayor que el numero aleatorio");
    } else {
      alert("el numero ingresado es menor que el numero aleatorio");
    }
  }
  formUsu.reset();
}
botonComenzar.addEventListener("click", numAleatorio);
formUsu.addEventListener("submit", numeroUsu);