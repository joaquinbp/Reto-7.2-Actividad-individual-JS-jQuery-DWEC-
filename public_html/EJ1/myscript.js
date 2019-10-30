//Joaquín Bono Pineda

function $(selector){
    return document.querySelector(selector);
}

//Event that shows the response when the mouse is over
$("#p1").addEventListener("mouseover",function(){
    var p=document.getElementById("p1");
    var l=document.getElementById("l1");
    l.style.marginLeft="35px";
    l.style.transitionDuration="1.5s"; 
    p.style.color="white";
    p.style.transitionDuration="1.5s";
       
});

//Event that hide the response when the mouse is out
$("#p1").addEventListener("mouseout",function(){
    var p=document.getElementById("p1");
    p.style.color="black";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l1");
    l.style.marginLeft="0px";
    l.style.transitionDuration="1.5s"; 
});

//Event that shows the response when the mouse is over
$("#p2").addEventListener("mouseover",function(){
    var p=document.getElementById("p2");
    p.style.color="white";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l2");
    l.style.marginLeft="35px";
    l.style.transitionDuration="1.5s";  
});

//Event that hide the response when the mouse is out
$("#p2").addEventListener("mouseout",function(){
    var p=document.getElementById("p2");
    p.style.color="black";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l2");
    l.style.marginLeft="0px";
    l.style.transitionDuration="1.5s"; 
});

//Event that shows the response when the mouse is over
$("#p3").addEventListener("mouseover",function(){
    var p=document.getElementById("p3");
    p.style.color="white";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l3");
    l.style.marginLeft="35px";
    l.style.transitionDuration="1.5s"; 
});

//Event that hide the response when the mouse is out
$("#p3").addEventListener("mouseout",function(){
    var p=document.getElementById("p3");
    p.style.color="black";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l3");
    l.style.marginLeft="0px";
    l.style.transitionDuration="1.5s"; 
});

//Event that shows the response when the mouse is over
$("#p4").addEventListener("mouseover",function(){
    var p=document.getElementById("p4");
    p.style.color="white";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l4");
    l.style.marginLeft="35px";
    l.style.transitionDuration="1.5s"; 
});

//Event that hide the response when the mouse is out
$("#p4").addEventListener("mouseout",function(){
    var p=document.getElementById("p4");
    p.style.color="black";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l4");
    l.style.marginLeft="0px";
    l.style.transitionDuration="1.5s"; 
});

//Event that shows the response when the mouse is over
$("#p5").addEventListener("mouseover",function(){
    var p=document.getElementById("p5");
    p.style.color="white";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l5");
    l.style.marginLeft="35px";
    l.style.transitionDuration="1.5s";  
});

//Event that hide the response when the mouse is out
$("#p5").addEventListener("mouseout",function(){
    var p=document.getElementById("p5");
    p.style.color="black";
    p.style.transitionDuration="1.5s"; 
    var l=document.getElementById("l5");
    l.style.marginLeft="0px";
    l.style.transitionDuration="1.5s"; 
});