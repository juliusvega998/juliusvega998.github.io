$(document).ready(function() {
	$('header').append(
		'<div id=\'banner-wrapper\'>' +
			'<div class=\'row\'>' +
				'<div class=\'col-sm-12\'>' +
					'<a href=\'index.html\'><img src=\'assets/img/banner_small.png\' class=\'img-fluid\' id=\'banner\'/></a>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<nav class=\'navbar navbar-light\' id=\'navbar\'>' +
			'<ul class=\'nav navbar-nav\'>' +
				'<li class=\'nav-item active\'>' +
					'<a class=\'nav-link\' href=\'#\' id=\'about\'>About Myself</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'#\' id=\'projects\'>Past Projects</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'#\' id=\'microsites\'>Microsites</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'#\' id=\'contact\'>Contact Me</a>' +
				'</li>' +
			'</ul>' +
		'</nav>'
	);

	handleNavClick('a#about', 1);
	handleNavClick('a#projects', 2);
	handleNavClick('a#microsites', 3);
	handleNavClick('a#contact', 4);
});