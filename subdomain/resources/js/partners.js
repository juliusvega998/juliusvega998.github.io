/*Created new js file for partners to control the animations better.*/
$(document).ready(function(){
    var maxHeightSection = 0;

    $("#dot-nav ul li").each(function(li) {
        changeDotColor($(this), "#316673");
    });

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

    $(document).scroll(function(){
        $("#dot-nav ul li").each(function(li) {
            changeDotColor($(this), "#316673");
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


    // Check all elements with a .target class against all images on a page
    BackgroundCheck.init({
      targets: '.target'
    });

    // Specific images
    BackgroundCheck.init({
      targets: '.target',
      images: '.thumbnails'
    });

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

});
