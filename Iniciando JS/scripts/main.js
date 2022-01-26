// JS del título
const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Kikiki';

// JS del botón

document.getElementById("boton").onclick = function() {boton()};

function boton() {
  document.getElementById("boton").innerHTML = "Jijiji ja";
}
// Click para cambiar el fondo de color de la página
window.onclick = colorfondo;

function colorfondo() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
}

// El botón despliega una serie de opciones
// Línea en la que al hacer click, se muestra la función que se escribe abajo.
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// Con ".show {display:block;}" el id myDropdown es lo que se quiere mostrar al dar click al botón y con .show haces mostrar myDropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}