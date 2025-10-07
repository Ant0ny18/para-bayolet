const boton = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");
const musica = document.getElementById("musica");

boton.addEventListener("click", async () => {
  if (mensaje.classList.contains("oculto")) {
    mensaje.classList.remove("oculto");
    escribirTexto(mensaje);

    try {
      await musica.play(); // reproducir cuando hace clic
    } catch (err) {
      console.log("El navegador bloqueó el audio: ", err);
    }
  } else {
    mensaje.classList.add("oculto");
    musica.pause();
  }
});

function escribirTexto(elemento) {
  const texto = elemento.textContent;
  elemento.textContent = "";
  let i = 0;
  const intervalo = setInterval(() => {
    elemento.textContent += texto[i];
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, 40);
}
