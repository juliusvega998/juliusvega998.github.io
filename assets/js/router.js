function activeNav(hash) {
	$('a').css('text-decoration', '');
	$('a[href=\'' + hash +'\']').css('text-decoration', 'underline');

	switch(hash) {
		case '#about': 
			document.title = 'Julius Vega | about_myself.page';
			$('main').load('templates/about.html', fadeLoader);
			break;
		case '#contact': 
			document.title = 'Julius Vega | contact_me.page';
			$('main').load('templates/contact.html', fadeLoader);
			break;
		case '#my_picture.jpg':
			document.title = 'Julius Vega | my_picture.jpg';
			$('main').load('templates/pictures/my_picture.html', fadeLoader);
			break;
		case '#diet':
			document.title = 'Julius Vega | diet_optimizer.page';
			$('main').load('templates/projects/diet.html', fadeLoader);
			break;
		case '#nine':
			document.title = 'Julius Vega | project_nine.page';
			$('main').load('templates/projects/nine.html', fadeLoader);
			break;
		case '#s1reborn':
			document.title = 'Julius Vega | systemone_reborn.page';
			$('main').load('templates/projects/s1reborn.html', fadeLoader);
			break;
		case '#diet.png':
			document.title = 'Julius Vega | diet.png';
			$('main').load('templates/pictures/diet.html', fadeLoader);
			break;
		case '#nine.png':
			document.title = 'Julius Vega | nine.png';
			$('main').load('templates/pictures/nine.html', fadeLoader);
			break;
		case '#s1reborn.png':
			document.title = 'Julius Vega | s1reborn.png';
			$('main').load('templates/pictures/s1reborn.html', fadeLoader);
			break;
		default: window.location.href = '404.html';
	}
}

function fadeLoader() {
	$('div#loading').fadeOut();
	putTabs();
}