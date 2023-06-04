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
//campos vacios
let form=document.getElementById("formulario");//acceso al formulario
let fetipo=document.querySelector('#tipodoc .feedback');
let fenum=document.querySelector('#numero .feedback');
let fenom=document.querySelector('#nombre .feedback');
let fetap=document.querySelector('#apellido .feedback');
let fetfech=document.querySelector('#fecha .feedback');
let fetcor=document.querySelector('#correo .feedback');
let fetpass=document.querySelector('#password .feedback');
let fetpass2=document.querySelector('#password2 .feedback');
let fetter=document.querySelector('#terminos .feedback');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const tipodoc=form.tipodoc.value;
    const num=form.numero.value;
    const nom=form.nombre.value;
    const apellido=form.apellido.value;
    const fecha=form.fecha.value;
    const correo=form.correo.value;
    const password=form.password.value;
    const password2=form.password2.value;
    const terminos=form.terminos.value;
    if (tipodoc==null | tipodoc==0){
        form.tipodoc.setAttribute("class","error");
        fetipo.textContent="Campo vacio, selecciona un tipo de documento";
        fetipo.style.setProperty("visibility", "visible");
        fetipo.style.setProperty("opacity", "1");
        form.tipodoc.focus(); 
    }
    else if (numero==null | numero==0){
        form.numero.setAttribute("class","error")
        fenum.textContent="Campo vacio, digita tu número de celular"
        fenum.style.setProperty("visibility", "visible");
        fenum.style.setProperty("opacity", "1");
        form.numero.focus();
    }

})