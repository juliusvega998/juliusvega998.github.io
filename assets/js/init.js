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

$(document).ready(function() {
    window.onhashchange = function() {
        $('div#loading').fadeIn();
        $('div#overlay').fadeIn();
        window.scrollTo(0,0);
        activeNav(window.location.hash);
    }

    if(!window.location.hash) {
        window.location.hash = '#about';
    }
});

function putTabs() {
    $('.tabbed').each(function(index) {
        $(this).html('&nbsp;&nbsp;&nbsp;&nbsp;' + $(this).html());
    });
}

function isMobile() {
	return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
}

fetch("/templates/footer.html").then(function(response) {
	return response.text();
}).then(function(body) {
	document.querySelector('footer').innerHTML = body;
}).catch(function(err) {
	alert(err);
});

let header = (isMobile())? "templates/m.header.html": "templates/header.html";

fetch(header).then(function(response) {
	return response.text();
}).then(function(body) {
	document.querySelector('header').innerHTML = body;
}).catch(function(err) {
	alert(err);
});

activeNav(window.location.hash);