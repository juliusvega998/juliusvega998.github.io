function activeNav(ctr, hash) {
	$('a').css('background-color', '');
	$('a[target=\'' + hash +'\']').css('background-color', 'rgba(0,0,0,0.5)');

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

	fadeLoader();
}

function fadeLoader() {
	$('div#loading').fadeOut();
}

function handleHash(hash) {
	if(hash === '#projects') {
		activeNav(2, hash);
	} else if(hash === '#contact') {
		activeNav(3, hash);
	} else {
		window.location.hash = '#about';
		activeNav(1, window.location.hash);
	}
}