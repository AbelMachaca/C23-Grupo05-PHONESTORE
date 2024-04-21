
const formulario = document.getElementById('formulario')
    const inputs = document.querySelectorAll('#formulario input')

let errores = false;

const expresiones = {
    imagen: /\.(jpg|jpeg|png|gif)$/,// jpg, jpeg, png o gif.
	direccion: /^[a-zA-Z0-9\s]{0,100}$/, // Letras, numeros, guion y guion_bajo.
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correo electronico
	telefono: /^\d{7,14}$/ //de 7 a 14 numeros
}

validarFormulario = (e)=>{
    switch(e.target.name){
        case 'imagen_usuario':
            validarCampo(expresiones.imagen, e.target, 'imagen'); 
        break;
        case 'nombre':
           validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case 'apellido':
            validarCampo(expresiones.nombre, e.target, 'apellido');
        break;
        case 'direccion':
            validarCampo(expresiones.direccion, e.target, 'direccion');
        break;    
        case 'email':
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    };
}


const validarCampo = (expresion,input,campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        errores = false;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        errores = true;
    };
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

    
// Prevenir envío si hay errores
formulario.addEventListener('submit', function (e) {
    if (errores) {
        e.preventDefault(); 
    }

})