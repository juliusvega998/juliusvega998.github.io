function activeNav(hash) {
	const name = 'Julius Vega | ';
	$('a').css('text-decoration', '');
	$('a[href=\'' + hash +'\']').css('text-decoration', 'underline');
	$(".button-collapse").sideNav('hide');

	switch(hash) {
		case '#about': case '#': case '': 
			loadPage('templates/', 'about.html', name + 'about_myself.page');
			break;
		case '#contact': 
			loadPage('templates/', 'contact.html', name + 'contact_me.page');
			break;
		case '#diet':
			loadPage('templates/projects/', 'diet.html', name + 'diet_optimizer.page');
			break;
		case '#nine':
			loadPage('templates/projects/', 'nine.html', name + 'project_nine.page');
			break;
		case '#s1reborn':
			loadPage('templates/projects/', 's1reborn.html', name + 'systemone_reborn.page');
			break;
		case '#twitch_annotator':
			loadPage('templates/projects/', 'sp.html', name + 'twitch_annotator.page');
			break;
		case '#my_picture.jpg':
			loadPage('templates/pictures/', 'my_picture.html', name + 'my_picture.jpg');
			break;
		case '#diet.png':
			loadPage('templates/pictures/', 'diet.html', name + 'diet.png');
			break;
		case '#nine.png':
			loadPage('templates/pictures/', 'nine.html', name + 'nine.png');
			break;
		case '#s1reborn.png':
			loadPage('templates/pictures/', 's1reborn.html', name + 's1reborn.png');
			break;
		case '#twitch_annotator.png':
			loadPage('templates/pictures/', 'sp.html', name + 'twitch_annotator.png');
			break;
		default: 
			window.location.href = '404.html';
	}
}

function loadPage(prefix, page, title) {
	document.title = title;
	if (isMobile() && !(prefix.includes('pictures') || page === 'contact.html')) {
		page = 'm.' + page
	}

	$('main').load(prefix + page, function() {
		$('div#loading').fadeOut();
		$('div#overlay').fadeOut();
		putTabs();
	});
}

function isMobile() {
	return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
}