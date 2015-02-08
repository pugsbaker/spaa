
(function() {
	this.data;

	$.getJSON( 'data/data.json', function(result){
		self.data = result;
	})

	$.get('templates/main.mustache', function(template) {
		var rendered = Mustache.render(template, self.data);
	    $('#target').html(rendered);
	    $(".background").first().addClass( 'active' );
	});
	
	
	setInterval(function() {
		self.changeSlide();
	}, 25000);
	
	this.changeSlide = function() {
		var activeSlide = $(".background.active");
		var isLast = $(".background").last().hasClass( 'active' );
		activeSlide.removeClass( 'active');
		if(isLast) {
			$(".background").first().addClass( 'active' );
		} else {
			activeSlide.next().addClass( 'active' );
		}
	}
	
})();
