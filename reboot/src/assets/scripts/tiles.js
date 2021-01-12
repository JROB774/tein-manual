'use strict;'

// Call create table each time this is modified
var res = {original: [], current_filtered: []};

/*
Papa.parse("./tiles.csv", {
    download: true,
    delimiter: "|",
    header: true,
	complete: function(results) {
        console.log(results);
        res.original = results.data;
        res.current_filtered = res.original
        createTable(res.current_filtered, 10);    
    }
});
*/

//var locale = JSON.parse("./en.json");
//var cats = JSON.parse("./categories.json");
//var tiles = JSON.parse("./tiles.json");

function getLocale(key){
    const regex = /\{.*\}/g;
    s = en[key];
    while(regex.exec(s)){
        var matches = s.match(regex);
        for(var i in matches){
            s = s.replace(i, locale[i.substring(1, i.length - 1)]);
        }
    }

    return s;
}

console.log(getLocale("tile_solid_hidden_tip"));

function createTable(res, width){
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    for(let i = 0; i < Math.ceil(res.length / width); ++i){
        var row = document.createElement('tr');
        for(let j = 0; j < width; ++j){
            var cell = document.createElement('td');
            cell.setAttribute("id", "tile_" + (i * width + j));
            if(res.length < i * width + j + 1){
                break;
            }
            else{
                cell.appendChild(document.createTextNode((i*width + j)));
                row.appendChild(cell);
            }
        }
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    document.getElementById("tile_table").appendChild(table);
}