/*
Todos los campos del formulario sean obligatorios (no puede quedar ningún campo sin seleccionar o diligenciar).
El campo No. documento solo permita el ingreso de números y la longitud sea de mínimo 5 caracteres.
Los campos Nombre y Apellido, deben admitir caracteres alfanuméricos.
El campo fecha nacimiento debe contar con una restricción para evitar el ingreso de una fecha inferior al año 2002 (solo mayores de 18 años).
El campo correo electrónico solo permita el ingreso de correos con el dominio @misena.edu.co
El campo password debe incluir mínimo una letra mayúscula, un número, una letra minúscula, un carácter y debe ser mínimo de 10 caracteres.
Comprobar que el password digitado y su confirmación son iguales
Se debe comprobar que sea ha chequeado el checkbox de aceptar Términos de uso*/
let btn=document.getElementById("abrirModal")
let vtn=document.getElementById("modal")
btn.addEventListener("click",(e)=>{
    e.preventDefault;
    vtn.style.display="block";
})
function cerrar (e){
    e.preventDefault;
    vtn.style.display="none";
}

// reglas de validacion
const numdoc=/^[0-9]{5,10}/
const nomap=/^[a-zA-Z0-9]*$/
