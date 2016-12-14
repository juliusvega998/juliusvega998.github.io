$(document).ready(function() {
	$('header').load('templates/header.html', function() {
		handleHash(window.location.hash);
	});
});