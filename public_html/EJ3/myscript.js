//Joaquin Bono Pineda

var ocultaHomer=true;
var ocultaMarge=true;
var ocultaBart=true;
var ocultaLisa=true;
var ocultaMaggie=true;

function $(selector){
    return document.querySelector(selector);
}

//Event that show or hide the character information when you clikc on its name

$("#homer").addEventListener("click",function(){
    var homer=document.getElementById("pH");
    if(ocultaHomer){
        homer.style.display="block";
        ocultaHomer=false;
    } else{
        homer.style.display="none";
        ocultaHomer=true; 
    }    
});

//Event that show or hide the character information when you clikc on its name

$("#marge").addEventListener("click",function(){
    var marge=document.getElementById("pM");
    if(ocultaMarge){
        marge.style.display="block";
        ocultaMarge=false;
    } else{
        marge.style.display="none";
        ocultaMarge=true; 
    }    
});

//Event that show or hide the character information when you clikc on its name

$("#bart").addEventListener("click",function(){
    var bart=document.getElementById("pB");
    if(ocultaBart){
        bart.style.display="block";
        ocultaBart=false;
    } else{
        bart.style.display="none";
        ocultaBart=true; 
    }    
});

//Event that show or hide the character information when you clikc on its name

$("#lisa").addEventListener("click",function(){
    var lisa=document.getElementById("pL");
    if(ocultaLisa){
        lisa.style.display="block";
        ocultaLisa=false;
    } else{
        lisa.style.display="none";
        ocultaLisa=true; 
    }    
});

//Event that show or hide the character information when you clikc on its name

$("#maggie").addEventListener("click",function(){
    var maggie=document.getElementById("pMgg");
    if(ocultaMaggie){
        maggie.style.display="block";
        ocultaMaggie=false;
    } else{
        maggie.style.display="none";
        ocultaMaggie=true; 
    }    
});