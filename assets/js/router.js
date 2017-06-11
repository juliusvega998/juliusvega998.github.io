function activeNav(hash) {
	const name = 'Julius Vega | '
	$('a').css('text-decoration', '');
	$('a[href=\'' + hash +'\']').css('text-decoration', 'underline');

	switch(hash) {
		case '#about': 
			document.title = name + 'about_myself.page';
			$('main').load('templates/about.html', fadeLoader);
			break;
		case '#contact': 
			document.title = name + 'contact_me.page';
			$('main').load('templates/contact.html', fadeLoader);
			break;
		case '#my_picture.jpg':
			document.title = name + 'my_picture.jpg';
			$('main').load('templates/pictures/my_picture.html', fadeLoader);
			break;
		case '#diet':
			document.title = name + 'diet_optimizer.page';
			$('main').load('templates/projects/diet.html', fadeLoader);
			break;
		case '#nine':
			document.title = name + 'project_nine.page';
			$('main').load('templates/projects/nine.html', fadeLoader);
			break;
		case '#s1reborn':
			document.title = name + 'systemone_reborn.page';
			$('main').load('templates/projects/s1reborn.html', fadeLoader);
			break;
		case '#twitch_annotator':
			document.title = name + 'twitch_annotator.page';
			$('main').load('templates/projects/sp.html', fadeLoader);
			break;
		case '#diet.png':
			document.title = name + 'diet.png';
			$('main').load('templates/pictures/diet.html', fadeLoader);
			break;
		case '#nine.png':
			document.title = name + 'nine.png';
			$('main').load('templates/pictures/nine.html', fadeLoader);
			break;
		case '#s1reborn.png':
			document.title = name + 's1reborn.png';
			$('main').load('templates/pictures/s1reborn.html', fadeLoader);
			break;
		case '#twitch_annotator.png':
			document.title = name + 'twitch_annotator.png';
			$('main').load('templates/pictures/sp.html', fadeLoader);
			break;
		case '#': break;
		default: window.location.href = '404.html';
	}
}

function fadeLoader() {
	$('div#loading').fadeOut();
	putTabs();
}