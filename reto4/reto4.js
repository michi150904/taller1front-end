function orientacion(){
    let listProf=document.getElementById("prof").value;
    let listApel=document.getElementById("profap").value;
    let listMat=document.getElementById("mat").value;
    switch (listProf){
        case "tat":
            if(listApel=="cab" && listMat=="laj"){
                alert ("Correcto, el nombre de la profesora es Tatiana Cabrera y dicta la materia de Lenguaje avanzado en Java");
            }

            break;
         
        case "jen":
            if(listApel=="faj" && listMat=="fjs"){
                alert ("Correcto, el nombre de la profesora es Jennifer Fajardo y dicta la materia de Fundamentos de Java Script");
            }
            else if(listApel=="faj" && listMat=="redp"){
                alert ("Correcto, el nombre de la profesora es Jennifer Fajardo y dicta la materia de Realización y Estimación de proyecto");
            }

            break;

        case "jon":
            if(listApel=="esp" && listMat=="sql"){
                alert ("Correcto, el nombre del profesor es Jonathan Espitia y dicta la materia de Consulta y sql Extendido, relacionales y no relacionales");
            }
    
            break;

        case "tat":
            if(listApel=="cab" && listMat=="laj"){
                alert ("Correcto, el nombre de la profesora es Tatiana Cabrera y dicta la materia de Lenguaje avanzado en Java");
            }

            break;
        
        case "marg":
            if(listApel=="gua" && listMat=="pair"){
                alert ("Correcto, el nombre de la profesora es Margarita Guarin y dicta la materia de Prototipado avanzado Interfaces Responsive");
            }
    
            break;
    
        case "lore":
            if(listApel=="med" && listMat=="com"){
                alert ("Correcto, el nombre de la profesora es Lorena Medina y dicta la materia de Comunicación");
            }
    
            break;
        
        case "pau":
            if(listApel=="rom" && listMat=="emp"){
                alert ("Correcto, el nombre de la profesora es Paula Romero y dicta la materia de Emprendimiento");
            }
    
            break;

        case "uld":
            if(listApel=="and" && listMat=="ph"){
                alert ("Correcto, el nombre del profesor es Uldarico Andrade y dicta la materia de Phyton Básico");
            }
    
            break;

    default:
            alert ("La respuesta es incorrecta.");
        break;

        

    
        
    }

}