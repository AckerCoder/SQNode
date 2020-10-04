const fs = require('fs')
const path = require('path')

/*
Crear Tabla Nom_Tabla (Campo1-Int; Campo2-char(30); edad-int; Campo3-date)
INSERTAR Estudiante (1, ‘Renzo’,’paredes’, 23, ‘16/02/1998’)
SELECT * DESDE Estudiante DONDE id_est = 1
BORRAR DESDE Estudiante DONDE id_est = 1
MODIFICAR Estudiante SET nom = ‘Rensso’ DONDE id_est = 1
*/

const crearTabla = (nombreTabla, arrCampos)=>{
    let formato = ""
    for(let i = 0; i< arrCampos.length; i++){
        formato = formato + "#" + arrCampos[i] + "# "
    }
    fs.writeFileSync(nombreTabla + '.txt', formato)
}

const insertar = (nombreTabla, arrDatos)=>{
let datos = "\n"
    for(let i = 0; i< arrDatos.length; i++){
        datos = datos + "#" + arrDatos[i] + "# "
    }
    fs.appendFileSync(nombreTabla + '.txt', datos)
}
crearTabla("hola", ["Campo1-Int", "Campo2-char(30)", "edad-int", "Campo3-date"])
insertar("hola", ["1", "Renzo","paredes", "23", "16/02/1998"])
insertar("hola", ["2", "Renzo","paredes", "23", "16/02/1998"])