window.onhashchange = function() {
	$('div#overlay').fadeIn();
	window.scrollTo(0,0);
	activeNav(window.location.hash);
}

//TODO: convert to vanillaJS
function headerInit() {
	$('.collapsible').collapsible();
	$('.button-collapse').sideNav();
	$('div.collapsible-body > ul > *').css('padding-left', function (index, curValue) {
		return parseInt(curValue, 10) + 16 + 'px';
	});
	$('a[href=\'' + window.location.hash +'\']').css('text-decoration', 'underline');
}

function putTabs() {
	$('.tabbed').each(function(index) {
		$(this).html('&nbsp;&nbsp;&nbsp;&nbsp;' + $(this).html());
	});
}

function isMobile() {
	return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
}

function fetchPage(page, tag, callback) {
	fetch(page).then(function(response) {
		return response.text();
	}).then(function(body) {
		document.querySelector(tag).innerHTML = body;
		if(callback) {
			callback();
		}
	}).catch(function(err) {
		alert(err);
	});
}


function activeNav(hash) {
	if(!hash) {
		hash = '#about';
	}

	//TODO: convert to vanillaJS
	const name = 'Julius Vega | ';
	$('a').css('text-decoration', '');
	$('a[href=\'' + hash +'\']').css('text-decoration', 'underline');
	$('.button-collapse').sideNav('hide');

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

	fetchPage(prefix + page, 'main', function() {
		$('div#overlay').fadeOut();
		putTabs();
	})
}

let header = (isMobile())? 'templates/m.header.html': 'templates/header.html';

fetchPage('/templates/footer.html', 'footer');
fetchPage(header, 'header', headerInit);
activeNav(window.location.hash);