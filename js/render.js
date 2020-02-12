function renderPage() {
  var api_key = "6f022cf1f752be83df1e9aa4dbd05a0c";
  // define variables
  var ajaxUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=6f022cf1f752be83df1e9aa4dbd05a0c",
		html,data;

    // make ajax request
		// https://api.jquery.com/jquery.ajax/
		$.ajax({
			url: ajaxUrl,
			dataType: "json",
			success: function(data){
				// response from API
				//console.log(data);
        var template = $('#entry-template').html();
        var templateScript = Handlebars.compile(template);
        var context = { "movies" : data.results};
        var html = templateScript(context);
        $("#entry").append(html);
			} // success
		});

}
