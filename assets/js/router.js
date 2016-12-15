function activeNav(ctr) {
	$('nav>ul>li>a').css('text-decoration', '');
	$('nav>ul>li:nth-child(' + ctr + ')>a').css('text-decoration', 'underline');

	switch(ctr) {
		case 1: 
			document.title = 'Julius Vega | About';
			$('section').load('templates/about.html', fadeLoader);
			break;
		case 2: 
			document.title = 'Julius Vega | Past Projects';
			$('section').load('templates/projects.html', fadeLoader);
			break;
		case 3: 
			document.title = 'Julius Vega | Contact Me';
			$('section').load('templates/contact.html', fadeLoader);
			break;
		default: window.location.href = '404.html';
	}
}

function fadeLoader() {
	$('div#loading').fadeOut();
}

function handleHash(hash) {
	if(hash === '#projects') {
		activeNav(2);
	} else if(hash === '#contact') {
		activeNav(3);
	} else {
		window.location.hash = '#about';
		activeNav(1);
	}
}