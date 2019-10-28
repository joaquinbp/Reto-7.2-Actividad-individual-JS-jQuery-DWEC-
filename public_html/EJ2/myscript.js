
function $(selector){
    return document.querySelector(selector);
}

function insertar(){
    var ultimaFila=false;
    console.log(document.getElementById("tabla").rows.length);
    if(document.getElementById("tabla").rows.length>0){
        ultimaFila=document.getElementById("tabla").lastChild;
        console.log("hola");
    } 
    if(!ultimaFila || document.getElementById("tabla").lastChild.length==7){
        $("table").innerHTML="<tr><td><img src='http://lorempixel.com/400/200/?1234567890'></td></tr>";
        console.log("hola2");
    } else{
        document.getElementById("tabla").lastChild.innerHTML="<td><img src='http://lorempixel.com/400/200/?1234567890'></td>";
        console.log("hola3");
    }
    
}