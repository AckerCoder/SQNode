/*
Crear Tabla Nom_Tabla (Campo1-Int; Campo2-char(30); edad-int; Campo3-date)
INSERTAR Estudiante (1, ‘Renzo’,’paredes’, 23, ‘16/02/1998’)
SELECT * DESDE Estudiante DONDE id_est = 1
BORRAR DESDE Estudiante DONDE id_est = 1
MODIFICAR Estudiante SET nom = ‘Rensso’ DONDE id_est = 1




*/

const comandos = ["crear tabla", "insertar", "seleccionar", "borrar", "modificar"]

const separarPalabras = (entrada)=>{
    entradaDescapitalizada = entrada.toLowerCase()
    entradaTrabajada = entradaDescapitalizada.split(" ")
    return entradaTrabajada
}

//////////////////////////////////////////
        //DESOMPONER COMANDOS//
/////////////////////////////////////////

const identificarComando = (arrComando)=>{
    if(arrComando[0] === "crear" && arrComando[1] === "tabla"){
                
    }
    else if(arrComando[0] === "insertar"){

    }
    else if(arrComando[0] === "seleccionar"){
        
    }
    else if(arrComando[0] === "insertar"){
        
    }
    else if(arrComando[0] === "borrar"){
        
    }
    else if(arrComando[0] === "modificar"){
        
    }
}

separarPalabras("Crear Tabla Nom_Tabla (Campo1-Int; Campo2-char(30); edad-int; Campo3-date)")