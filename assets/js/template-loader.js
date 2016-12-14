function activeNav(ctr) {
	$('nav>ul>li>a').css('text-decoration', '');
	$('nav>ul>li:nth-child(' + ctr + ')>a').css('text-decoration', 'underline');

	switch(ctr) {
		case 1: 
			document.title = 'Julius Vega | About';
			$('section').load('templates/about.html'); 
			break;
		case 2: 
			document.title = 'Julius Vega | Past Projects';
			$('section').load('templates/projects.html'); 
			break;
		default: window.location.href = 'misc/under-construction.html';
	}
}

function handleHash(hash) {
	if(hash === '#about') {
		activeNav(1);
	} else if(hash === '#projects') {
		activeNav(2);
	} else if(hash === '#microsites') {
		activeNav(3);
	} else if(hash === '#contact') {
		activeNav(4);
	}

	$('div#loading').fadeOut();
}