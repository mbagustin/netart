function mushroom(){
    document.getElementById("mushroom").style.display = "block";
    document.getElementById("mushroom").style.zIndex = "0";

    const p = document.createElement("p");
    p.textContent = "hey! this topping wasn't part of the order!";

    document.getElementById("pizza-container").appendChild(p);

    p.style.position = "absolute";
    p.style.top = "5%";
    p.style.left = "30%";
    p.style.background = "coral";
    p.style.border = "1px solid coral";

    setTimeout(() => {
        p.remove(); 
    }, 1000); 
} 
function bellpepper(){
    document.getElementById("bellpepper").style.display = "block";
    document.getElementById("bellpepper").style.zIndex = "10";

}


function olive(){
    document.getElementById("olive").style.display = "block";
    document.getElementById("olive").style.zIndex = "0";

    const p = document.createElement("p");
    p.textContent = "hey! this topping wasn't part of the order!";

    document.getElementById("pizza-container").appendChild(p);

    p.style.position = "absolute";
    p.style.top = "5%";
    p.style.left = "30%";
    p.style.background = "coral";
    p.style.border = "1px solid coral";

    setTimeout(() => {
        p.remove(); 
    }, 1000); 
}


function onion(){
    document.getElementById("onion").style.display = "block";
    document.getElementById("onion").style.zIndex = "0";

    const p = document.createElement("p");
    p.textContent = "hey! this topping wasn't part of the order!";

    document.getElementById("pizza-container").appendChild(p);

    p.style.position = "absolute";
    p.style.top = "5%";
    p.style.left = "30%";
    p.style.background = "coral";
    p.style.border = "1px solid coral";

    setTimeout(() => {
        p.remove(); 
    }, 1000); 
}
function pepperoni(){
    document.getElementById("pepperoni").style.display = "block";
    document.getElementById("pepperoni").style.zIndex = "10";
}
function sausage(){
    document.getElementById("sausage").style.display = "block";
    document.getElementById("sausage").style.zIndex = "10";
}