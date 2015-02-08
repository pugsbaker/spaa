
(function() {
	this.data;

	$.getJSON( 'data/data.json', function(result){
		self.data = result;
	})

	$.get('templates/main.mustache', function(template) {
		var rendered = Mustache.render(template, self.data);
	    $('#target').html(rendered);
	});
	
})();
