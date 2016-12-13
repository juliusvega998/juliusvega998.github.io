$(document).ready(function() {
	$('header').append(
		'<div id=\'banner-wrapper\'>' +
			'<div class=\'row\'>' +
				'<div class=\'col-sm-12\'>' +
					'<a href=\'index.html\'><img src=\'assets/img/banner.png\' class=\'img-fluid\' id=\'banner\'/></a>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<nav class=\'navbar navbar-light\' id=\'navbar\'>' +
			'<ul class=\'nav navbar-nav\'>' +
				'<li class=\'nav-item active\'>' +
					'<a class=\'nav-link\' href=\'index.html\'>About myself</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'under-construction.html\'>Projects</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'under-construction.html\'>Microsites</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'under-construction.html\'>Contact me</a>' +
				'</li>' +
			'</ul>' +
		'</nav>'
	);
});

function activeNav(ctr) {
	$(document).ready(function() {
		$('nav>ul>li:nth-child(' + ctr + ')>a').addClass('active');
	});
}