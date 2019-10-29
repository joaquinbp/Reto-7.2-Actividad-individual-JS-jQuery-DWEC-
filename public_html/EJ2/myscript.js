var cont=0;
var tabla=document.getElementById("tabla");
var filas=document.getElementsByTagName("tr");
var celdas=document.getElementsByTagName("td");
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
   /* if(filas[filas.length-1].length==1){
        var bin=filas.pop();
    } else if(celdas.length<1){
        alert("No hay imagenes");
    } else{
       tabla.removeChild();
    }*/
    console.log(cont);
    if(celdas.length>0){
        let ultimaFila=filas[filas.length-1];
        if(celdas.length-1%7==0){
            tabla.removeChild(filas[filas.length-1]);
        } else{
            ultimaFila.removeChild(celdas[celdas.length-1]);
            cont--;
        }
    } else{
        alert("No hay imagenes");
    }
}