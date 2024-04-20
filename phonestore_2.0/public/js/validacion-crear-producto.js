document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");

  // Agregar listeners de blur a cada campo para validarlos cuando el usuario sale del campo
  const campos = form.querySelectorAll(".input-general-createProduct");
  campos.forEach(function(campo) {
      campo.addEventListener("blur", function() {
          validarCampo(campo);
      });
  });

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente

      let isValid = true;

      // Validar cada campo
      campos.forEach(function(campo) {
          if (!validarCampo(campo)) {
              isValid = false;
          }
      });

      // Si todos los campos son válidos, enviar el formulario
      if (isValid) {
          form.submit(); // Enviar el formulario si todos los campos son válidos
      }
  });
});

function validarCampo(campo) {
  const input = campo.value.trim();
  const mensajeError = campo.parentElement.querySelector(".mensaje-error");

  let isValid = true;

  switch (campo.id) {
      case "modelo":
          if (input.length < 5) {
              mensajeError.innerText = "El nombre del modelo debe tener al menos 5 caracteres.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      case "image":
          if (input === "") {
              mensajeError.innerText = "Debe seleccionar una imagen.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      case "marca":
          if (input === "") {
              mensajeError.innerText = "Debe seleccionar una marca.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      case "price":
          if (input === "") {
              mensajeError.innerText = "El campo precio no puede estar vacío.";
              isValid = false;
          } else if (isNaN(input) || parseFloat(input) <= 0) {
              mensajeError.innerText = "El precio debe ser un número mayor que cero.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      case "description":
          if (input.length < 20) {
              mensajeError.innerText = "La descripción debe tener al menos 20 caracteres.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      case "almacenamiento":
          if (isNaN(input) || parseInt(input) <= 0) {
              mensajeError.innerText = "El almacenamiento debe ser un número mayor que cero.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      case "ram":
          if (isNaN(input) || parseInt(input) <= 0) {
              mensajeError.innerText = "La RAM debe ser un número mayor que cero.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      case "so":
          if (input === "") {
              mensajeError.innerText = "Debe ingresar un sistema operativo.";
              isValid = false;
          } else {
              mensajeError.innerText = ""; // Limpiar el mensaje de error si el campo es válido
          }
          break;
      default:
          break;
  }

  return isValid;
}
