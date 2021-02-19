'use strict;'

var res    = {original: [], current_filtered: []};
var locale = {};
var cats   = {};
var tiles  = {};

// Call create table each time this is modified
async function Setup() {
    locale = await GetJson("https://raw.githubusercontent.com/JROB774/tein-manual/master/reboot/src/reference/tiles/en.json");
    cats   = await GetJson("https://raw.githubusercontent.com/JROB774/tein-manual/master/reboot/src/reference/tiles/categories.json");
    tiles  = await GetJson("https://raw.githubusercontent.com/JROB774/tein-manual/master/reboot/src/reference/tiles/tiles.json");

    console.log(cats);

    for(var cat in cats){
        createTable(cats[cat].tiles, 10, cats[cat].name);
    }
}
async function GetJson(url) {
    return await fetch(url).then(r => r.json())
                           .then(data => data)
                           .catch(e => console.log("JSON couldn't be fetched. Error: " + e));
}

function getLocale(key){
    const regex = /\{.*\}/g;
    s = locale[key];
    while(regex.exec(s)){
        var matches = s.match(regex);
        for(var i in matches){
            s = s.replace(matches[i], locale[matches[i].substring(1, matches[i].length - 1)]);
        }
    }
    return s;
}


function createTable(res, width, header){
    var table = document.createElement('table');
    table.setAttribute("id", "category_" + header);
    var tableBody = document.createElement('tbody');

    for(let i = 0; i < Math.ceil(res.length / width); ++i){
        var row = document.createElement('tr');
        for(let j = 0; j < width; ++j){
            if(res.length < i * width + j + 1){
                break;
            }
            var tile = tiles[res[i *width + j]];
            var id = tile.ids[0];
            var cell = document.createElement('td');
            cell.setAttribute("id", "tile_" + id);
            
            img = document.createElement("IMG");
            img.setAttribute("class", "mini-tile")
            img.setAttribute("src", "../../assets/images/tiles/small/" + id + ".png");
            img.setAttribute("alt", id);

            cell.onclick = (function(tile) {
                return function (){
                    renderTileData(tile, header);
            };})(tile, header);

            cell.appendChild(img);
            row.appendChild(cell);
            
        }
        tableBody.appendChild(row);
    }

    //table.appendChild(tableBody);
    document.getElementById("tile_table").appendChild(
        document.createElement('h3').appendChild(
            document.createTextNode(header)));
    document.getElementById("tile_table").appendChild(tableBody);
}

function renderTileData(tile, t_type, id){
    document.getElementById("tile_layer").innerHTML = "Layer: " + tile.layer;
    document.getElementById("tile_name").innerHTML  = getLocale(tile.name);
    document.getElementById("tile_note").innerHTML  = getLocale(tile.tooltip);
    document.getElementById("tile_type").innerHTML  = t_type;
    var i = document.getElementById("tile_large_image");
    i.src = "../../assets/images/tiles/large/" + tile.ids[0] + ".png";
    i.alt = "Large icon for tile: " + getLocale(tile.name);
   
}

Setup();
