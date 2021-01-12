'use strict;'

var res;

Papa.parse("./tiles.csv", {
    download: true,
    delimiter: "|",
    header: true,
	complete: function(results) {
        res = results;
        console.log(results);
        createTable(res.data, 3);    
    }
});

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
    console.log(tableBody);
    document.getElementById("tile_table").appendChild(table);
    console.log("Table Created.");
}