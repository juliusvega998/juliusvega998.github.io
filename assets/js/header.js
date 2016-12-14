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
					'<a class=\'nav-link\' href=\'index.html\'>About Myself</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'under-construction.html\'>Past Projects</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'under-construction.html\'>Microsites</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'under-construction.html\'>Contact Me</a>' +
				'</li>' +
			'</ul>' +
		'</nav>'
	);
});

function activeNav(ctr) {
	$(document).ready(function() {
		$('nav>ul>li:nth-child(' + ctr + ')>a').addClass('active');
		$('div#loading').fadeOut(function() {
			$('div#content').fadeIn();
		});
	});
}