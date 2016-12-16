function activeNav(hash) {
	$('a').css('text-decoration', '');
	$('a[href=\'' + hash +'\']').css('text-decoration', 'underline');

	switch(hash) {
		case '#about': 
			document.title = 'Julius Vega | about_myself.html';
			$('section').load('templates/about.html', fadeLoader);
			break;
		case '#projects': 
			document.title = 'Julius Vega | past_projects.html';
			$('section').load('templates/projects.html', fadeLoader);
			break;
		case '#contact': 
			document.title = 'Julius Vega | contact_me.html';
			$('section').load('templates/contact.html', fadeLoader);
			break;
		case '#my_picture.jpg':
			document.title = 'Julius Vega | my_picture.jpg';
			$('section').load('templates/my_picture.html', fadeLoader);
			break;
		case '#diet.png':
			document.title = 'Julius Vega | diet.png';
			$('section').load('templates/diet.html', fadeLoader);
			break;
		case '#nine.png':
			document.title = 'Julius Vega | nine.png';
			$('section').load('templates/nine.html', fadeLoader);
			break;
		case '#s1reborn.png':
			document.title = 'Julius Vega | s1reborn.png';
			$('section').load('templates/s1reborn.html', fadeLoader);
			break;
		default: window.location.href = '404.html';
	}

	fadeLoader();
}

function fadeLoader() {
	$('div#loading').fadeOut();
	putTabs();
}