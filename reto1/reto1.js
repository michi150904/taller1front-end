function valor(){
    let word=document.querySelector(".palabra").value;
    let list=document.getElementById("lista").value;
switch (list){
    case "lp":
        long=word.length;
        alert (`La longitud de la palabra es: ${long}`)
    break;

    case "cpm":
        mayu=word.toUpperCase();
        alert (`La palabra en mayuscula es: ${mayu}`)
    break; 

    case "cpmn":
        min=word.toLowerCase();
        alert (`La palabra en minuscula es: ${min}`)
    break;

    case "pc":
        car=word.charAt(0);
        alert (`El primer caracter de la letra es: ${car}`)
}
}