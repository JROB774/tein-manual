# Tile Reference

Test

<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
<script>
    var res;
    Papa.parse("./tiles.csv", {
        download: true,
        delimiter: "|",
        header: true,
	    complete: function(results) {
            res = results;
            console.log(results);
	    }
    });
</script>