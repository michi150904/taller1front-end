//onchange
document.getElementById("fname").onchange = function() {myFunction()};
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
//onclick
document.getElementById("demo").onclick = function() {ocfunction()};

function ocfunction() {
    document.getElementById("demo").innerHTML = "SORPRESAA!";
}
//onfocus
document.getElementById("name").onfocus = function() {ffunction()};

function ffunction() {
    document.getElementById("name").style.backgroundColor = "red";
}
//onsubmit
document.getElementById("myForm").onsubmit = function() {onsfunction()};

function onsfunction() {
    alert("Así funciona el evento onsubmit");

}
//onunload
function ofunction() {
    alert("Thank you for visiting W3Schools!");
}
//ondbclick
document.getElementById("click").ondblclick = function() {odbfunction()};

function odbfunction() {
    document.getElementById("click")
    alert ( "Asi funciona el evento ondbclick")
}
//onreset
document.getElementById("Form").onreset = function() {rfunction()};

function rfunction() {
       alert ( "Se restablecio el formulario");
 document.getElementById("reset")
}
//onkeypress
document.getElementById("okp").onkeypress = function() {okpunction()};

function okpunction() {
    document.getElementById("okp").style.backgroundColor = "red";
}
//onkeyup
document.getElementById("oku").onkeyup = function() {okufunction()};

function okufunction() {
    var okuf = document.getElementById("oku");
    okuf.value = okuf.value.toUpperCase();
}
//onselect
document.getElementById("myText").onselect = function() {osfunction()};

function osfunction() {
    alert ( "Asi funciona el evento onselect");
}
