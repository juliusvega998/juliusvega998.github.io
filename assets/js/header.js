$(document).ready(function() {
	if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
		$('header').load('templates/m.header.html', function() {
			activeNav(window.location.hash);
		});	
	} else {
		$('header').load('templates/header.html', function() {
			activeNav(window.location.hash);
		});	
	}
});