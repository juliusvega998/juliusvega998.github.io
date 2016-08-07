let posts = [];
$(document).ready(function () {
	$('.tooltipped').tooltip({delay: 50});
	
	if(localStorage.posts) {
		posts = JSON.parse(localStorage.posts);
		insertAll();
	}
});

$('#post').click(function () {
	let name = $('#name').val();
	let comment = $('#comment').val();
	let post = {
		name: name,
		comment: comment
	}

	insert(post);

	$("#name").val("");
	$("#comment").val("");
});

$('#clear').click(function () {
	localStorage.clear();
	$("#comments").html("");
})

function insertAll(){
	for(let i=0; i < posts.length; i++) {
		insert(posts[i]);
	}
}

function insert(post) {
	let commentHTML = $("#comments");
	let htmlCode =
		"<div class='row col s12'>" + 
            "<div class='card horizontal'>" +
                "<div class='card-image' id='dp-holder'>" +
                    "<img src='resources/img/prof-pic.png' class='dp' />" +
                "</div>" +
                "<div class='card-stacked'>" +
                    "<div class='card-content'>" +
                        "<p class='poster'>" + post.name + "</p>" +
                        "<p>" + post.comment + "</p>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";

    if($("#permanent").is(":checked")) {
    	posts.push(post);
    	localStorage.posts = JSON.stringify(posts);
    }

	commentHTML.append(htmlCode);
}