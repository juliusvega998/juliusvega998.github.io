$(document).ready(function() {
    window.onhashchange = function() {
        $('div#loading').fadeIn();
        handleHash(window.location.hash);
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