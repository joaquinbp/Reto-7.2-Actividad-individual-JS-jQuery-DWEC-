//Joaquín Bono Pineda

var cont=0; //Table image counter
var tabla=document.getElementById("tabla");
var filas=document.getElementsByTagName("tr");
var celdas=document.getElementsByTagName("td");

function $(selector){
    return document.querySelector(selector);
}
//Function that inserts an imagen in the table
function insertar(){
    var date=new Date().getTime();
    if(cont%7==0){
        var fila=document.createElement("tr");
        $("table").appendChild(fila);
        var celda=document.createElement("td");
        celda.innerHTML="<img src='http://lorempixel.com/200/100/?1234567890'"+date+">";
        document.getElementById("tabla").lastChild.appendChild(celda);
        cont++;
    } else{
        var celda=document.createElement("td");
        celda.innerHTML="<img src='http://lorempixel.com/200/100/?1234567890'"+date+">";
        document.getElementById("tabla").lastChild.appendChild(celda);
        cont++;
    }
    
} 

//Function that removes an image from the table
function eliminar(){
    console.log(cont);
    if(celdas.length>0){
        let ultimaFila=filas[filas.length-1];
        console.log("LAST");
        console.log(ultimaFila);
        if(cont%7-1==0 && cont!=0){
            tabla.removeChild(tabla.lastChild);
            cont--;
        } else{
            ultimaFila.removeChild(celdas[celdas.length-1]);
            cont--;
        }
    } else{
        alert("No hay imagenes");
        cont=0;
    }
}