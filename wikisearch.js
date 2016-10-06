

$(document).ready(function(){
	$("#find").click(function(){
		$("#results").html("<br>"); //clear page
	    var term = $("#search").val();
	   	$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=20&search=" + term + "&callback=?", function(data) {
			for(var i = 0; i < data[1].length; i++){
                $('#results').append("<h2>" + data[1][i] + "</h2>" + "\n"
                + "<p>" + data[2][i] + "</p>" + "\n"
                + "<a href=' " + data[3][i] + " '>Full Article</a>"
                );
            }
		$("#results").show();
        });
	});
	//random page
	$("#random").click(function(){
		var url = "http://en.wikipedia.org/wiki/Special:Random";
		window.open(url, '_blank');
	});
}); 
