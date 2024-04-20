window.addEventListener('load', function(){
    let errores = []
    // validacion del formato email
    function validarEmail() {
        let email = document.querySelector('#email').value;
        let expresionReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular para validar email
        let mensaje = document.querySelector("#mensaje_email")
        if (expresionReg.test(email)) { 
        mensaje.innerHTML = "";
        } else {
        mensaje.innerHTML = "El email ingresado debe tener el siguiente formato ejemplo@ejemplo.com";
        // errores.push("hay un error en email")
        }
    }
    email.addEventListener('input', validarEmail);

    // validacion del contenido campo password

    function validarCampoPassword() {
        let passwordContenido = document.querySelector('#password'); // Seleccionar el campo de contraseña
        let password = passwordContenido.value
        let mensaje = document.querySelector("#mensaje_password");
    
        if (password == "") { 
            mensaje.innerHTML = "Ingrese su contraseña";
            // errores.push("Ingrese su password")
            console.log("if")
        } else {
            console.log("else")
            mensaje.innerHTML = "";
        }
    }
    
    let passwordm = document.querySelector('#password');
    passwordm.addEventListener('blur', validarCampoPassword);

})

