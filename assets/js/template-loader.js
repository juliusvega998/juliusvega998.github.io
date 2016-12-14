function activeNav(ctr) {
	$('nav>ul>li>a').css('text-decoration', 'none');
	$('nav>ul>li:nth-child(' + ctr + ')>a').css('text-decoration', 'underline');
	
	switch(ctr) {
		case 1: $('section').load('templates/about.html'); break;
		case 2: $('section').load('templates/projects.html'); break;
		default: window.location.href = '404.html';
	}
}

function handleNavClick(css, ctr) {
	$(css).click(function() {
		activeNav(ctr);
	});
}