$(document).ready(function() {
	$('header').load('templates/header.html', function() {
		activeNav(window.location.hash);
	});
});