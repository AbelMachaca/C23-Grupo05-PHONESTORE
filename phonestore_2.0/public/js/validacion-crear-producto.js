const form = document.getElementById("form");
console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Validar los campos del formulario uno por uno
  const modelo = document.querySelector("#modelo").value;
  const image = document.querySelector("#image").value;
  const marca = document.querySelector("#marca").value;
  const price = document.querySelector("#price").value;
  const description = document.querySelector("#description").value;
  const almacenamiento = document.querySelector("#almacenamiento").value;
  const ram = document.querySelector("#ram").value;
  const so = document.querySelector("#so").value;

  let isValid = true;

  // Validar nombre del modelo
  if (modelo.length < 5) {
    isValid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El nombre del modelo debe tener al menos 5 caracteres.",
    });
    return; // Detener la ejecución aquí si el campo no es válido
  }

  // Validar las imágenes
  if (image === "") {
    isValid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debe seleccionar una imagen.",
    });
    return;
  } else {
    // Expresión regular para verificar la extensión del archivo
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(image)) {
      isValid = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El archivo de imagen debe ser JPG, JPEG, PNG o GIF.",
      });
      return;
    }
  }

  // Validar la marca
  if (marca === "") {
    isValid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debe seleccionar una marca.",
    });
    return;
  }

  // Validar el precio
if (price === "") {
  isValid = false;
  Swal.fire({
      icon: "error",
      title: "Error",
      text: "El campo precio no puede estar vacío.",
  });
  return;
} else if (isNaN(price) || parseFloat(price) <= 0) {
  isValid = false;
  Swal.fire({
      icon: "error",
      title: "Error",
      text: "El precio debe ser un número mayor que cero.",
  });
  return;
}


  // Validar la descripción
  if (description.length < 20) {
    isValid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "La descripción debe tener al menos 20 caracteres.",
    });
    return;
  }

  // Validar el almacenamiento
  if (almacenamiento <= 0 || isNaN(almacenamiento)) {
    isValid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "El almacenamiento debe ser un número mayor que cero.",
    });
    return;
  }

  // Validar la RAM
  if (ram <= 0 || isNaN(ram)) {
    isValid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "La RAM debe ser un número mayor que cero.",
    });
    return;
  }

  // Validar el sistema operativo
  if (so === "") {
    isValid = false;
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Debe ingresar un sistema operativo.",
    });
    return;
  }

  // Si todos los campos son válidos, enviar el formulario
  if (isValid) {
    Swal.fire({
      title: "¿Deseas guardar los cambios?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: "No guardar"
    }).then((result) => {
      if (result.isConfirmed) {
        form.submit(); // Enviar el formulario si se confirma
        Swal.fire("¡Guardado!", "", "success");
      } else if (result.isDenied) {
        // No hacer nada si se niega
        Swal.fire("Los cambios no se guardaron", "", "info");
      }
    });
  }
  
});