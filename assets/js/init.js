// $(document).ready(function() {
// 	$('footer').load('templates/footer.html');
// });

// $(document).ready(function() {
// 	if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
// 		$('header').load('templates/m.header.html', function() {
// 			activeNav(window.location.hash);
// 		});	
// 	} else {
// 		$('header').load('templates/header.html', function() {
// 			activeNav(window.location.hash);
// 		});	
// 	}
// });

fetch("/templates/footer.html").then(function(response) {
	return response.text();
}).then(function(body) {
	document.querySelector('footer').innerHTML = body;
}).catch(function(err) {
	alert(err);
});

let header = 
	(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))? 
	"templates/m.header.html": 
	"templates/header.html";

fetch(header).then(function(response) {
	return response.text();
}).then(function(body) {
	document.querySelector('header').innerHTML = body;
}).catch(function(err) {
	alert(err);
});