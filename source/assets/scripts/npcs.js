'use strict;'

function display_npcs(name, until, start = 1, padding = 1, per_row = 7){
    var container = document.createElement('div');
    container.setAttribute("class", "splat-npc");

    for(let i = start; i <= until; ++i){

        var full = name + pad(i, padding);

        var div = document.createElement('div');
        div.setAttribute("class", "npc-container");
        div.style.flexBasis = 100/per_row + "%";
        div.style.maxWidth = 100/per_row + "%";

        var img = document.createElement("IMG");
        //img.setAttribute("class", "npc-image")
        img.setAttribute("src", "./assets/images/npcs/" + full + ".png");
        img.setAttribute("alt", full);

        var p = document.createElement("p");
        p.textContent = full;

        div.appendChild(img);
        div.appendChild(p);

        container.appendChild(div);
    }

    //document.getElementById("main").appendChild(container);
    document.currentScript.insertAdjacentElement('afterend', container);
}

function pad(n, width, z){
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

