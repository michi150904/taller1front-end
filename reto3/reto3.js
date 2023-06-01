function calcular(){
    let lado1=document.getElementById("lado1").value;
    let lado2=document.getElementById("lado2").value;
    let lado3=document.getElementById("lado3").value;
     if(lado1==lado2 && lado1==lado3){
        alert ("Es un triagulo equilatero, debido a que tiene tres lados iguales");
     }
     else if(lado1==lado2 || lado1==lado3 || lado2==lado3){
        alert ("Es un triangulo isoceles, debido a que solo tiene dos lados iguales.")
     }
     else if (lado1!=lado2 && lado1!=lado3 && lado2!=lado3){
        alert ("Es un triangulo escaleno, debido a que ninguno de sus lados es igual.")
     }
}