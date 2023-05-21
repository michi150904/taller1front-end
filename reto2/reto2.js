function convertir(){
    let number=document.getElementById("ntmp").value;
    let listConv=document.getElementById("conva").value;
    let listDesConv=document.getElementById("dscnv").value;
    if (listConv=="cels"){
        if (listDesConv=="celsd"){
            alert (`La temperatura en Celsius es ${number}`);
        }
        else if (listDesConv=="farhd"){
            far=(number*1.8)+32;
            alert (`La temperatura de Celcius a Fahrenheit es: ${far}`);
        }
        else if (listDesConv=="keld"){
            kel=number+273.15;//concatenado
            alert (`La temperatura de Celsius a Kelvin es: ${kel}`);
        }
    }
    else if(listConv=="farh"){
        if (listDesConv=="celsd"){
            cels=(number-32)*0.55;
            alert (`La temperatura de Fahrenheit a Celsius es ${cels}`);
        }
        else if (listDesConv=="farhd"){
            alert (`La temperatura en Fahrenheit es: ${number}`);
        }
        else if (listDesConv=="keld"){
            kel=(number-32)*0.55+273.15;
            alert (`La temperatura de Celsius a Kelvin es: ${kel}`);
        }
    }
    else if(listConv=="kel"){
        if (listDesConv=="celsd"){
            cels=number-273.15;
            alert (`La temperatura de Kelvin a Celsius es ${cels}`);
        }
        else if (listDesConv=="farhd"){
            far=(number-273.15)*1.8+32;
            alert (`La temperatura de Kelvin a Fahrenheit es: ${far}`);
        }
        else if (listDesConv=="keld"){
            alert (`La temperatura en Kelvin es: ${number}`);
        }
    }
    

}