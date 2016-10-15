$(document).ready(function(){
    $("button#send").click(function() {
        console.log("a");
        var link = "mailto:ieshikawa@upciem.org"
                 + "?cc="
                 + "&subject=" + escape("Message from ieshikawa.upciem.org")
                 + "&body=" + escape($('#message')[0].value)
        ;
        window.location.href = link;
        console.log("sent!");
    });
    var maxHeightSection = 0;

    $('.dropdown-button').dropdown({
        inDuration: 400,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });//*/

    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.collapsible').collapsible();

    $('.slider').slider({full_width: true});
    $('.indicators').hide();

    $('.about-nav').click(function () {
        window.location = 'ieshikawa.html';
    });
    $('.event-nav').click(function () {
      console.log("boom");
        window.location = 'events.html';
    });

    /* Change navbar color on scroll (IESHIKAWA) */
    var scroll_start = 0;
    var startchange = $('.navbar-fixed');
    var offset = startchange.offset();

    $(document).scroll(function(){
        /* change navigation color */
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            if($('.main-nav')[0]){
                $('.main-nav').parent().css('background', 'rgba(0, 0, 0, .9)');
                $('nav .main-nav li.current').css('border-bottom-color', '#5E7EC1');
            }else{
                if($('nav.to-white-text')[0]){
                    $('.sub-nav').parent().css('background', 'rgba(27, 86, 100, .9)').removeClass('inv');
                    $('nav .sub-nav li.current').css('border-bottom-color', '#FFF');
                }
            }

        } else {
          $('.transp').css('background', 'transparent', 'box-shadow', 'none');
            if($('.sub-nav')[0]){
                if($('nav.inv-perm')[0] || $('nav.transp')[0]){
                    if(!($('nav.white-text-perm')[0])){
                        $('.sub-nav').parent().addClass('inv');
                    }
                }
                $('nav .sub-nav li.current').css('border-bottom-color', '#007072');
            }
        }

        var target = $("#dot-nav li.toWhite a").attr("href");

        $("#dot-nav ul li").each(function(li) {
          if(collision($(target), $(this))) { // if home section
            changeDotColor($(this), "white");
          } else { // to puke-green */
            changeDotColor($(this), "#316673");
          }
        });

        function collision($div1, $div2) {
          var x1 = $div1.offset().left;
          var y1 = $div1.offset().top;
          var h1 = $div1.outerHeight(true);
          var w1 = $div1.outerWidth(true);
          var b1 = y1 + h1;
          var r1 = x1 + w1;
          var x2 = $div2.offset().left;
          var y2 = $div2.offset().top;
          var h2 = $div2.outerHeight(true);
          var w2 = $div2.outerWidth(true);
          var b2 = y2 + h2;
          var r2 = x2 + w2;

          if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
          return true;
        }
    });

    /* check background animation */
    // Check all elements with a .target class against all images on a page

    function changeDotColor(item, color){
      item.mouseenter(function() {
          $(this).css("background-color", color);
      }).mouseleave(function() {
        if($(this).hasClass("active")) $(this).css('background-color', color);
        else $(this).css('background-color', 'rgba(255, 255, 255, 0.3)');
      });
      item.css('border', '3px solid '+color);
      if(item.hasClass('active')) item.css('background-color', color);
      else item.css('background-color', 'rgba(255, 255, 255, 0.3)');
    }

    /* Animation on menu links */
    var $root = $('html, body');
    $('.page-scroll').click(function(){
      var href = $.attr(this, 'href');
      $root.animate({
        scrollTop : $(href).offset().top
      }, 500);
      return false;
    });

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           alert("bottom!");
       }
    });

});
