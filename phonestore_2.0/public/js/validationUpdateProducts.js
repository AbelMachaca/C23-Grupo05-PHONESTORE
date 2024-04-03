window.onload = function () {
    let inputMarca = document.querySelector('input[name="marca"]')
    let inputModelo = document.querySelector('input[name="modelo"]')
    let inputPrecio = document.querySelector('input[name="precio"]')
    let inputAlmacenamiento = document.querySelector('input[name="almacenamiento"]')
    let inputRam= document.querySelector('input[name="ram"]')
    let inputSo= document.querySelector('input[name="so"]')
    let inputDescripcion=document.querySelector("#descripcion")
    let successIcon = document.createElement("i");

    inputMarca.focus()

    function mensajeCampoVacio(inputElement, mensaje) {

        let inputContainer = inputElement.parentElement;
        let errorIcon = inputContainer.querySelector(".error-icon");
        let errorMessage = inputContainer.querySelector(".mensaje-de-error");

        if (inputElement.value === "") {
            
            
            
            if(successIcon){
                successIcon.remove()
            }


           if(!errorIcon){
                // Crear icono de advertencia si no existe
                errorIcon = document.createElement("i");
                errorIcon.classList.add("fas", "fa-exclamation-triangle", "error-icon");
                errorIcon.style.color = "red";
                inputContainer.appendChild(errorIcon);
           }
 
            if (!errorMessage) {

                errorMessage = document.createElement("p");
                errorMessage.classList.add("mensaje-de-error");
                errorMessage.innerText = mensaje || "Este campo no puede estar vacío";
                inputContainer.appendChild(errorMessage);
            }

            inputElement.classList.add("is-invalid");
            
            
        } else {
            
            if(errorIcon){
                errorIcon.remove()
            }

            if (errorMessage) {
                errorMessage.remove();
               
            }


            inputElement.classList.remove("is-invalid");

          
            
            successIcon.classList.add("fas", "fa-check-circle", "success-icon");
            successIcon.classList.add("posicion");
            successIcon.style.color = "green";
            inputContainer.appendChild(successIcon);
            
            

        }

    }
    function mensajeValor(inputElement, mensaje) {
        let inputContainer = inputElement.parentElement;
        let errorIcon = inputContainer.querySelector(".error-icon");
        let errorMessage = inputContainer.querySelector(".mensaje-de-error");
      

      
        if (inputElement.value <= 0) {
            if(successIcon){
                successIcon.remove()
            }

            if(!errorIcon){
                
                errorIcon = document.createElement("i");
                errorIcon.classList.add("fas", "fa-exclamation-triangle", "error-icon");
                errorIcon.style.color = "red";
                inputContainer.appendChild(errorIcon);
           }

            if (!errorMessage) {

                errorMessage = document.createElement("p");
                errorMessage.classList.add("mensaje-de-error");
                errorMessage.innerText = mensaje || "Debe ingresar un valor valido";
                inputContainer.appendChild(errorMessage);
            }

            inputElement.classList.add("is-invalid");
        } else {
            
            if (errorIcon) {
                errorIcon.remove();
            }

            if (errorMessage) {
                errorMessage.remove();
            }

            inputElement.classList.remove("is-invalid");

            
            successIcon.classList.add("fas", "fa-check-circle", "success-icon");
            successIcon.classList.add("posicion");
            successIcon.style.color = "green";
            inputContainer.appendChild(successIcon);

           

        }

    }

    inputMarca.addEventListener("blur", function (e) {

        mensajeCampoVacio(inputMarca);
    });

    inputModelo.addEventListener("blur", function (e) {
        mensajeCampoVacio(inputModelo);
    });

    inputPrecio.addEventListener("blur", function (e) {

        mensajeValor(inputPrecio);
    });

    inputAlmacenamiento.addEventListener("blur", function (e) {

        mensajeValor(inputAlmacenamiento);
    });


    inputRam.addEventListener("blur", function (e) {

        mensajeValor(inputRam);
    });

    inputSo.addEventListener("blur", function (e) {

        mensajeCampoVacio(inputSo);
    });

    inputDescripcion.addEventListener("blur", function (e) {

        mensajeCampoVacio(inputDescripcion);
    });
}
