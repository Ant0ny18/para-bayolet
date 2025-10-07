const btnMensaje = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");
const musica = document.getElementById('musica');
musica.play();

btnMensaje.addEventListener("click", () => {
  escribirTexto(mensaje);
});

function escribirTexto(elemento) {
  const texto = elemento.innerHTML;
  elemento.innerHTML = ""; // Limpia el texto
  elemento.classList.remove("oculto");

  let i = 0;
  const velocidad = 45; // Velocidad de escritura (ms por letra)

  function escribir() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }
  escribir();
}
