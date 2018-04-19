// $(document).ready(function() {
// 	$('footer').load('templates/footer.html');
// });

fetch("/templates/footer.html").then(function(response) {
	return response.text();
}).then(function(body) {
	document.querySelector('footer').innerHTML = body;
}).catch(function(err) {
	alert(err);
})