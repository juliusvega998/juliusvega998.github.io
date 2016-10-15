function changeTo(index){
    $('.talk-title').html(talks[index].title);
    $('.talk-desc').html(talks[index].description);
    $('#talk-img-1').css('display', 'none');
    $('#talk-img-2').css('display', 'none');
    $('#talk-img-3').css('display', 'none');
    $('#talk-img-' + (index+1)).css('display', 'inline');
    $('#talk-nav-active').attr('id', " ");
    $('#talk-nav-active-m').attr('id', " ");
    $('#talk-nav-active-s').attr('id', " ");
    $('#talk-nav ul li:nth-child(' + (index+1) + ')').attr('id', "talk-nav-active");
    $('#talk-nav-med ul li:nth-child(' + (index+1) + ')').attr('id', "talk-nav-active-m");
    $('#talk-nav-small ul li:nth-child(' + (index+1) + ')').attr('id', "talk-nav-active-s");
}

changeTo(0);