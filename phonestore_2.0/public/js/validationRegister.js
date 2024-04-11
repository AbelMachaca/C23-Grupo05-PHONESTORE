const elemento = (element) => document.querySelector(element);

const messageError = (element, msg, target) => {
    elemento(element).innerText = msg;
    elemento(element).style.color = "#e23922";
    elemento(element).style.fontSize = "14px";
    target.classList.add("is-invalid");
};

const validatorInput = (element, target) => {
    elemento(element).innerText = null;
    target.classList.add("is-valid");
    target.classList.remove("is-invalid");
};
const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    exRegPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.,;'" ])[A-Za-z\d$@$!%*?&.,;'" ]{3,30}$/,
};


const inputName = document.querySelector("#name");
    inputName.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameError", "Debes completar el campo con tu nombre", target);
            break;
        case this.value.trim().length < 3:
            messageError(".nameError", "El nombre debe tener minimo 3 o mas caracteres", target);
            break;
        case this.value.trim().length > 30:
            messageError(".nameError", "El nombre debe tener maximo 30 caracteres", target);
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".nameError", "Solo caracteres alfabetico", target);
            break;
        default:
            validatorInput(".nameError", target);
            break;
    }
});



const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;

const inputImg = document.querySelector('#imagen_usuario');
inputImg.addEventListener('change', function({target}) {
    const file = target.files[0];
    if (!file) {
        messageError(".imageError", "Formato válido.", target);
        return;
    }
    switch (true) {
        case !filtro.test(file.name.toLowerCase()):
            messageError(".imageError", "Solo se permiten formatos de imagen jpg, jpeg, png, gif, webp, svg.", target);
            break;
        default:
            validatorInput(".imageError", target);
            break;
    }
});



const inputApellido = document.querySelector("#apellido");
    inputApellido.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".apellidoError", "Debes completar el campo con tu apellido", target);
            break;
        case this.value.trim().length < 3:
            messageError(".apellidoError", "El apellido debe tener minimo 3 o mas caracteres", target);
            break;
        case this.value.trim().length > 30:
            messageError(".apellidoError", "El apellido debe tener maximo 30 caracteres", target);
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".apellidoError", "Solo caracteres alfabetico", target);
            break;
        default:
            validatorInput(".apellidoError", target);
            break;
    }
});



const inputEmail = document.querySelector("#email")
    inputEmail.addEventListener("blur", async function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".emailError", "Debes completar este campo con tu email", target);
            break;
        case !expresionesRegulares.exRegEmail.test(this.value):
            messageError(".emailError", "Ingrese un formato de email válido", target);
            break;
        default:
            validatorInput(".emailError", target)
            break;
    }
});

const inputPassword = document.querySelector("#password")
    inputPassword.addEventListener("blur", function({target}) {
    switch (true) {
        case this.value.trim().length <= 8:
            messageError(".passError","Contraseña minimo 8 a maximo 20 caracteres",target);
            break;
        case this.value.trim().length > 20:
            messageError(".passError","Contraseña minimo 8 a maximo 20 caracteres", target);
            break;
        case !expresionesRegulares.exRegPass.test(this.value):
            messageError(".passError","Debes incluir números, mayúscula, minúscula y un caracter especial($!%*?&.,;')",target);
            break;
        default:
            validatorInput(".passError", target);
            break;
    }
});

const form = document.querySelector('.main__form__register');
const errorMessage = document.getElementById('error-registerUser');


form.addEventListener('submit', function(event) {
    const nameError = document.querySelector('.nameError');
    const apellidoError = document.querySelector('.apellidoError');
    const emailError = document.querySelector('.emailError');
    const passError = document.querySelector('.passError');
    const imageError = document.querySelector('.imageError');

    
    const hasError = nameError.innerText || emailError.innerText || passError.innerText || apellidoError.innerText || imageError.innerText;

    
    if (hasError) {
        errorMessage.style.display = 'block'; 
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none'; 
        
    }
});