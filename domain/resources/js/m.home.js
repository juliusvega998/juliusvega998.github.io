$(document).ready(function(){
/*
    Sidenav
*/
    $(".button-collapse")
    .sideNav({
		menuWidth: 400, // Default is 240
		edge: 'left', // Choose the horizontal origin
		closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    $('.bxslider').bxSlider();
});
