// Función para limpiar el mensaje de error del campo de imagen cuando se selecciona una imagen
function limpiarMensajeErrorImagen() {
  const errorMessage = document.querySelector("#image").nextElementSibling; // Elemento que muestra el mensaje de error
  errorMessage.textContent = ""; // Limpiar el mensaje de error
}

// Event listener para limpiar el mensaje de error del campo de imagen cuando se selecciona una imagen
document.querySelector("#image").addEventListener("change", function() {
  limpiarMensajeErrorImagen();
});


// Función para limpiar el mensaje de error cuando se comienza a llenar el campo
function limpiarMensajeError(input) {
  const errorMessage = input.nextElementSibling; // Elemento que muestra el mensaje de error
  errorMessage.textContent = ""; // Limpiar el mensaje de error
}

// Event listeners para limpiar el mensaje de error al comenzar a llenar un campo
document.querySelectorAll('input[type="text"], input[type="number"], textarea, select').forEach(input => {
  input.addEventListener("input", function() {
      limpiarMensajeError(input);
  });
});

// Función para validar todos los campos
function validarFormulario() {
  let isValid = true;

  // Definir los campos y sus respectivos mensajes de error
  const campos = [
      { campo: "modelo", mensajeError: "El campo Modelo es obligatorio." },
      { campo: "image", mensajeError: "Debe seleccionar una imagen." },
      { campo: "marca", mensajeError: "Debe seleccionar una marca." },
      { campo: "price", mensajeError: "El campo Precio es obligatorio." },
      { campo: "description", mensajeError: "El campo Descripción es obligatorio." },
      { campo: "almacenamiento", mensajeError: "El campo Almacenamiento es obligatorio." },
      { campo: "ram", mensajeError: "El campo RAM es obligatorio." },
      { campo: "so", mensajeError: "El campo Sistema Operativo es obligatorio." }
  ];

  // Iterar por cada campo y verificar si está vacío
  campos.forEach(item => {
      const valor = document.querySelector(`#${item.campo}`).value.trim();
      const errorMessage = document.querySelector(`#${item.campo}`).nextElementSibling; // Elemento siguiente que mostrará el mensaje de error

      // Verificar si el campo está vacío
      if (valor === "") {
          errorMessage.textContent = item.mensajeError;
          isValid = false;
      }
  });

  return isValid;
}

// Event listener para el envío del formulario
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Validar el formulario antes de enviarlo
  const formularioValido = validarFormulario();

  // Si el formulario es válido, enviarlo
  if (formularioValido) {
      // Aquí puedes agregar el código para enviar el formulario
      this.submit();
      console.log("El formulario es válido. Enviando...");
  } else {
      console.log("El formulario no es válido. Por favor, complete todos los campos.");
  }
});
