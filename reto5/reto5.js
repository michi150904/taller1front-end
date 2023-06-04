//modal cuadrado
//perimetro
let btnpc=document.getElementById("abrirModalPC")
let vtnpc=document.getElementById("modalPC")
btnpc.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnpc.style.display="block";
})
function cerrarPC (e){
    e.preventDefault();
    vtnpc.style.display="none";
}
function perimetro(){
    let ladper=parseInt(document.getElementById("prlad").value);
    let perimetro=ladper*4;
    alert ("El perimetro del cuadrado es: "+perimetro);
}
//area
let btnac=document.getElementById("abrirModalAC")
let vtnac=document.getElementById("modalAC")
btnac.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnac.style.display="block";
})
function cerrarAC (e){
    e.preventDefault();
    vtnac.style.display="none";
}
function area (){
    let numAlt=parseInt(document.getElementById("alrcu").value)
    let area=numAlt*numAlt;
    alert ("El area del cuadrado es: "+area)
}
//Modal rectangulo
//perimetro
let btnpr=document.getElementById("abrirModalPR")
let vtnpr=document.getElementById("modalPR")
btnpr.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnpr.style.display="block";
})
function cerrarPR (e){
    e.preventDefault();
    vtnpr.style.display="none";
}
function perimetroRE (){
    let numLad1=parseInt(document.getElementById("arlad1").value)
    let numLad2=parseInt(document.getElementById("arlad2").value)
    let numLad3=parseInt(document.getElementById("arlad3").value)
    let numLad4=parseInt(document.getElementById("arlad4").value)
    let perRec=numLad1+numLad2+numLad3+numLad4;
    alert ("El perimetro del cuadrado es: "+perRec)
}

//area
let btnar=document.getElementById("abrirModalAR")
let vtnar=document.getElementById("modalAR")
btnar.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnar.style.display="block";
})
function cerrarAR (e){
    e.preventDefault();
    vtnar.style.display="none";
}
function areaRE (){
    let numBaseRec=parseInt(document.getElementById("basre").value)
    let numAltRec=parseInt(document.getElementById("alrec").value)
    let areaRec=numBaseRec*numAltRec
    alert ("El area del cuadrado es: "+areaRec)
}
//Modal circulo
//perimetro
let btnpci=document.getElementById("abrirModalPCI")
let vtnpci=document.getElementById("modalPCI")
btnpci.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnpci.style.display="block";
})
function cerrarPCI (e){
    e.preventDefault();
    vtnpci.style.display="none";
}
function perimetroCI (){
    let numDiam=parseInt(document.getElementById("diap").value)
    let perCi=numDiam*3.1416;
    alert ("El perimetro del circulo es: "+perCi)
}
//area
let btnaci=document.getElementById("abrirModalACI")
let vtnaci=document.getElementById("modalACI")
btnaci.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnaci.style.display="block";
})
function cerrarACI (e){
    e.preventDefault();
    vtnaci.style.display="none";
}
function areaCir (){
    let numRad=parseInt(document.getElementById("raar").value)
    let areaCi=(numRad*numRad)*3.1416;
    alert ("El area del circulo es: "+areaCi)
}
//modal triangulo
//perimetro
let btnpt=document.getElementById("abrirModalPT")
let vtnpt=document.getElementById("modalPT")
btnpt.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnpt.style.display="block";
})
function cerrarPT (e){
    e.preventDefault();
    vtnpt.style.display="none";
}
function perimetroT (){
    let tLad1=parseInt(document.getElementById("trlad1").value)
    let tLad2=parseInt(document.getElementById("trlad2").value)
    let tLad3=parseInt(document.getElementById("trlad3").value)
    let perT=tLad1+tLad2+tLad3;
    alert ("El perimetro del Triangulo es: "+perT)
}

//area
let btnat=document.getElementById("abrirModalAT")
let vtnat=document.getElementById("modalAT")
btnat.addEventListener("click",(e)=>{
    e.preventDefault();
    vtnat.style.display="block";
})
function cerrarAT (e){
    e.preventDefault();
    vtnat.style.display="none";
}
function areaT (){
    let numBaseT=parseInt(document.getElementById("bastr").value)
    let numAltT=parseInt(document.getElementById("altr").value)
    let areaT=(numBaseT*numAltT)/2;
    alert ("El area del triangulo es: "+areaT)
}