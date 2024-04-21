// Función para limpiar el mensaje de error cuando se comienza a llenar el campo
function limpiarMensajeError(input) {
    const errorMessage = input.nextElementSibling; // Elemento que muestra el mensaje de error
    errorMessage.textContent = ""; // Limpiar el mensaje de error
}

// Event listeners para limpiar el mensaje de error al comenzar a llenar un campo
document.querySelectorAll('input[type="email"], input[type="password"]').forEach(input => {
    input.addEventListener("input", function() {
        limpiarMensajeError(input);
    });
});

// Función para validar el formulario
function validarFormulario() {
    let isValid = true;

    // Definir los campos y sus respectivos mensajes de error
    const campos = [
        { campo: "email", mensajeError: "Por favor, introduce tu correo electrónico." },
        { campo: "password", mensajeError: "Por favor, introduce tu contraseña." }
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
document.querySelector(".form_login").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Validar el formulario antes de enviarlo
    const formularioValido = validarFormulario();

    // Si el formulario es válido, enviarlo
    if (formularioValido) {
        // Aquí puedes agregar el código para enviar el formulario
        console.log("El formulario es válido. Enviando...");
        this.submit(); // Enviar el formulario
    } else {
        console.log("El formulario no es válido. Por favor, complete todos los campos.");
    }
});
