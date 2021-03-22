'use strict;'

async function display_alt(folder, per_row = 5, ord_name = [], ord_extra = []){
    var currentScript = document.currentScript;
    var container = document.createElement('div');
    var path = "../../../assets/images/artalts/" + folder;
    var files = await fetch(path + "/files.txt")
        .then(function (response) {
            return response.text();
        });

    files = files.split('\n');
    
    container.setAttribute("class", "splat-alts");

    for(let i = 0; i < files.length; ++i){   
        container.appendChild(add_to_dom(path, files[i], per_row = per_row, name = ord_name[i], extra = ord_extra[i]));
    }

    currentScript.insertAdjacentElement('afterend', container);
}

function add_to_dom(dir, file, per_row = 5, name = null, extra = null){
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
    if(name != null){
        p.textContent = name
    }
    else{
        p.textContent = file.slice(0, -4);
    }
    p.setAttribute("class", "alts-name");
    
    div.appendChild(img);
    div.appendChild(p);

    if(extra != null){
        var p1 = document.createElement("p");
        p1.textContent = extra;
        p1.setAttribute("class", "alts-extra");
        div.appendChild(p1);
    }
    
    return div;
    //container.appendChild(div);


}

