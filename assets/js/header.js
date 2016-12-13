$(document).ready(function() {
	$('header').append(
		'<div id=\'banner-wrapper\'>' +
			'<div class=\'row\'>' +
				'<div class=\'col-sm-12\'>' +
					'<img src=\'assets/img/banner.png\' id=\'banner\'/>' +
				'</div>' +
			'</div>' +
		'</div>' +
		'<nav class=\'navbar navbar-light\' id=\'navbar\'>' +
			'<ul class=\'nav navbar-nav\'>' +
				'<li class=\'nav-item active\'>' +
					'<a class=\'nav-link\' href=\'#\'>About myself</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'#\'>Projects</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'#\'>Microsites</a>' +
				'</li>' +
				'<li class=\'nav-item\'>' +
					'<a class=\'nav-link\' href=\'#\'>Contact me</a>' +
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