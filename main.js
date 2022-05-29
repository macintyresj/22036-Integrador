const cantidad = document.querySelector("#quantity");
const categoria = document.querySelector("#category");
const total = document.querySelector("#total");
const mostrar = document.querySelector("#resumen");
let span = document.createElement("span");
total.appendChild(span);

mostrar.addEventListener("click", resumen);

function resumen(event) {
  event.preventDefault();
  let precio;
  if (categoria.value == 1) {
    precio = 200 * 0.2;
  } else if (categoria.value == 2) {
    precio = 200 * 0.5;
  } else {
    precio = 200 * 0.85;
  }
  console.log(precio);
  //   total.appendChild(precio * cantidad.value);
  span.innerHTML = " ";
  span.textContent = precio * cantidad.value;
}
