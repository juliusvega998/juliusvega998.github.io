/*
  "Dot Navigation with tooltips"
  Bootstrap 3.1.0 Snippet by maridlcrmn
*/

$(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });

    $(window).bind('scroll',function(e){
      dotnavigation();
      doThisOnScroll();
    });
    
    function dotnavigation(){
        var numDivs = $('section').length;
      
        $('#dot-nav li').removeClass('active');    
        $('section').each(function(i,item){
          var ele = $(item), nextTop;
          
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }
          
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numDivs);
          }
          else {
            thisTop = 0;
          }
          
          var docTop = $(document).scrollTop();
          
          if(docTop >= thisTop && (docTop < nextTop)){
            $('#dot-nav li.active').removeClass('active');
            $('#dot-nav li').eq(i).addClass('active');
          }
        });   
    }

    /* get clicks working */
    $('#dot-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });

    function doThisOnScroll(){
        
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

    }

    function changeDotColor(item, color){
      item.css('border', '3px solid '+color);
      $("#dot-nav li").css('background-color', 'rgba(255, 255, 255, 0.3)');
      $("#dot-nav li.active").css('background-color', color);
      item.mouseenter(function() {
          $(this).css("background-color", color);
      }).mouseleave(function() {
          $(this).css('background-color', 'rgba(255, 255, 255, 0.3)');
          if(item.hasClass('active')) item.css('background-color', color);
          else item.css('background-color', 'rgba(255, 255, 255, 0.3)');
      });
      /*
      if(item.hasClass('active')) item.css('background-color', color);
      else item.css('background-color', 'rgba(255, 255, 255, 0.3)');
      */
    }

});