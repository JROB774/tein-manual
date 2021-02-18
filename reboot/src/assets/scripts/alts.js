'use strict;'

async function display_alt(folder, per_row = 5){
    var currentScript = document.currentScript;
    var container = document.createElement('div');
    var path = "../../../assets/images/artalts/" + folder;
    var files = await fetch(path + "/files.txt")
        .then(function (response) {
            return response.text();
        });

    files = files.split('\n');
    
    container.setAttribute("class", "splat-alts");

    console.log(files);

    files.forEach(file => {
        container.appendChild(add_to_dom(path, file, per_row = 5));
    })

    currentScript.insertAdjacentElement('afterend', container);
}

function add_to_dom(dir, file, per_row = 5){
    var full = dir + "/" + file;
    
    var div = document.createElement('div');
    div.setAttribute("class", "alts-container");
    div.style.flexBasis = 100/per_row + "%";
    div.style.maxWidth = 100/per_row + "%";
        
    var img = document.createElement("IMG");
    //img.setAttribute("class", "npc-image")
    img.setAttribute("src", full);
    img.setAttribute("alt", file.slice(0, -4));
    
    var p = document.createElement("p");
    p.textContent = file.slice(0, -4);
    
    div.appendChild(img);
    div.appendChild(p);

    return div;
    //container.appendChild(div);


}

