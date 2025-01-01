//To navigate on the next page when page hash is changed
window.onhashchange = function() {
	document.getElementById('overlay').setAttribute('class', 'fade-in');
	window.scrollTo(0,0);
	activeNav(window.location.hash);
}

//To initialize the js needed for the header
function headerInit() {
	setCurrentPage(window.location.hash);
}

//To indent the text when a menu is expanded in header
function putTabs() {
	let tabbed = document.querySelectorAll('tabbed');
	tabbed.forEach(function(e, i) {
		e.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;'; 
	});
}

//underlines the current page in header
function setCurrentPage(hash) {
	let links = document.querySelectorAll('a');
	links.forEach(function(l, i) {
		if(l.getAttribute('href') == hash) {
			l.setAttribute('style', 'text-decoration:underline;');
		} else {
			l.setAttribute('style', 'text-decoration:none;');
		}
	});
}

//retrieves the html page depending on the hash
function activeNav(hash) {
	const name = 'Julius Vega | ';

	if(!hash) {
		hash = '#about';
	}

	setCurrentPage(hash);
	switch(hash) {
		case '#about': case '#': case '': 
			loadPage('templates/', 'about.html', name + 'about_myself.page');
			break;
		case '#past_employments':
			loadPage('templates/', 'past_employments.html', name + 'twitch_annotator.png');
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

let doShow = true;
function toggleSideNav() {
	if(isMobile()) {
		if(doShow) {
			document.getElementById('side-nav').setAttribute('class', 'going-in');
			document.getElementById('black-overlay').setAttribute('style', 'display: block;');
		} else {
			document.getElementById('side-nav').setAttribute('class', 'going-out');
			document.getElementById('black-overlay').setAttribute('style', 'display: none;');
		}
		doShow = !doShow
	}
}

//Checks if the user uses mobile or desktop computer
function isMobile() {
	return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
}

//fetches the html template
function fetchPage(page, tag, callback) {
	fetch(page).then(function(response) {
		return response.text();
	}).then(function(body) {
		document.querySelector(tag).innerHTML = body;
		if(callback) {
			callback();
		}
	}).catch(function(err) {
		console.log(err);
		alert("There is an error loading the page. Try refreshing the page.");
	});
}

//loads the page depending on the title
function loadPage(prefix, page, title) {
	document.title = title;
	if (isMobile() && !(prefix.includes('pictures') || page === 'contact.html')) {
		page = 'm.' + page
	}

	fetchPage(prefix + page, 'main', function() {
		document.getElementById('overlay').setAttribute('class', 'fade-out');
		if(!doShow && isMobile()) {
			toggleSideNav();
		}
		putTabs();
	})
}

//loads the header and the footer
let header = (isMobile())? 'templates/m.header.html': 'templates/header.html';
fetchPage(header, 'header', headerInit);
fetchPage('/templates/footer.html', 'footer');

activeNav(window.location.hash);