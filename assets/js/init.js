window.onhashchange = function() {
	$('div#overlay').fadeIn();
	window.scrollTo(0,0);
	activeNav(window.location.hash);
}

function headerInit() {
	$('.collapsible').collapsible();
	$(".button-collapse").sideNav();
	$('div.collapsible-body > ul > *').css('padding-left', function (index, curValue) {
		return parseInt(curValue, 10) + 16 + 'px';
	});
}

function putTabs() {
	$('.tabbed').each(function(index) {
		$(this).html('&nbsp;&nbsp;&nbsp;&nbsp;' + $(this).html());
	});
}

function isMobile() {
	return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
}

function fetchPage(page, tag) {
	fetch(page).then(function(response) {
		return response.text();
	}).then(function(body) {
		document.querySelector(tag).innerHTML = body;
	}).catch(function(err) {
		alert(err);
	});
}
let header = (isMobile())? "templates/m.header.html": "templates/header.html";

fetchPage("/templates/footer.html", "footer");
fetchPage(header, "header");
activeNav(window.location.hash);