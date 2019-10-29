var cont=0;
var tabla=document.getElementById("tabla");
var filas=tabla.getElementsByTagName("tr");
var celdas=tabla.getElementsByTagName("td");
function $(selector){
    return document.querySelector(selector);
}

function insertar(){
    if(cont%7==0){
        var fila=document.createElement("tr");
        $("table").appendChild(fila);
        var celda=document.createElement("td");
        celda.innerHTML="HOLA";
        document.getElementById("tabla").lastChild.appendChild(celda);
        cont++;
    } else{
        var celda=document.createElement("td");
        celda.innerHTML="HOLA";
        document.getElementById("tabla").lastChild.appendChild(celda);
        cont++;
    }
    
} 

function eliminar(){
    if(filas[filas.length-1].length==1){
        var bin=filas.pop();
    } else if(celdas.length<1){
        alert("No hay imagenes");
    } else{
       var bin=celdas.splice(celdas.length-1,1);
    }
}