$(document).ready(function () {
    // Smooth scroll cuando se hace clic en un enlace de clase "nav-link"
    $(".nav-link").click('click', function (event) {
      // Verifica si el enlace tiene un hash
      if (this.hash !== "") {
        event.preventDefault();   
        var hash = this.hash;     // Guarda el valor del hash
        // Animación de desplazamiento en 0.8 segundos
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 500, function () {
          window.location.hash = hash; // Agrega el hash a la URL después del desplazamiento
        });
      }
    });
  
    // Alerta de envío cuando se hace clic en el botón con id "enviarMensaje"
    $("#enviarMensaje").click(function () {
      alert("El mensaje fue enviado correctamente.");
    });
  });
  