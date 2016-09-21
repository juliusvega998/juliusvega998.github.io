$(document).ready(function(){
    $('#about-nav').click(function () {
        window.location = 'home.html';
    })


    $("button#send").click(function() {
        console.log("a");
        var link = "mailto:executive.board@upciem.org"
                 + "?cc=myCCaddress@example.com"
                 + "&subject=" + escape("Message from upciem.org")
                 + "&body=" + escape($('#message')[0].value)
        ;
        window.location.href = link;
        console.log("sent!");
    });
    var maxHeightSection = 0;

    // $('body').panelSnap({
    //     slideSpeed: 250,
    //     navigation: {
    //         keys:{
    //             nextKey: 40,
    //             prevKey: 38
    //         }
    //     }
    // });

    $('div.bottom').on('click',function(){
        // if($('section.active').height()>maxHeightSection){
            maxHeightSection = $('section.active').next().offset().top;
        // }
        $('body').animate({scrollTop:maxHeightSection},600);
    });

    // If scroll is at bottom, arrow disappears else appears
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $('div.bottom').css({"display":"none"});
        }
        else{
            $('div.bottom').css({"display":"inline"});
        }
    });

    $('.dropdown-button').dropdown({
        inDuration: 400,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });//*/

	// $('.dropdown-button').click(function(){
 //        console.log($(this).width());
 //        $(this).css({
 //            "width":"100%"
 //        });
 //    });

    $('.button-collapse').sideNav({
        closeOnClick: true
    });
    $('.collapsible').collapsible();

    $('.slider').slider({full_width: true});
    $('.indicators').hide();


    /* Change navbar color on scroll (IESHIKAWA) */
    var scroll_start = 0;
    var offset = $($("body > section")[1]).offset();


    /**********************************************
                NAVBAR BEHAVIORS
    ***********************************************/
    /*
        Legend:
            .main-nav <- domain navbar
            .sub-nav <- subdomain navbar
            .transp <- transparent background
            .inv <- black background
    */
    $(document).scroll(function(){
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top-65){ // kapag lagpas na sa first section
            if($('.main-nav')[0]){
                $('.main-nav')
                    .parent()
                    .css('background', 'rgba(0, 0, 0, .9)');         // Turns to transparent gray on scroll
                $('nav .main-nav li.current')
                    .css('border-bottom-color', '#5E7EC1');
                if($('.transp.event-nav')[0]){
                    $('.transp.event-nav')
                        .find("ul.links li a")
                        .css("color","#EEEEEE");                     // Turns text to white
                }
            }
        }
        else {// When at top
            $('.transp').css('background', 'transparent', 'box-shadow', 'none');
            if($('.main-nav')[0]){
                if($('.transp.event-nav')[0]){
                    $('.transp.event-nav')
                        .find("ul.links li a")
                        .css("color","#202324");                    // Make text to gray
                     $('.transp.event-nav')
                        .find("ul#dropdown li a")
                        .css("color","#EEEEEE")
                        .hover(                                     // Retain hover property of dropdown
                            function(){
                                $(this).css("color","#5E7EC1");
                            },
                            function(){
                                $(this).css("color","#EEEEEE");
                            }
                        );
                }
            }
        }
    });

    /**********************************************
                COMMITTEE RADIO BUTTON
    ***********************************************/
    // Set default active to Academic Affairs Committee
    $(".committee-section").css("display","none");
    $(".committee-section#comm_acad_desc").css("display","block");
    $("#comm_acad")
        .attr('src',"resources/images/logos/comm_acad.png")
        .addClass("active");

    // Update active radio to clicked radio
     $(".comm_radio").click(function(){
        var prev_active =  $(".comm_radio.active").attr("id");
        var current_active = $(this).attr("id");
        // Update image to line logo
        $(".comm_radio.active")
            .removeClass("active")
            .find("img")
            .attr("src","resources/images/logos/"+prev_active+"_l.png");
        // Update image to colored logo
        $(this)
            .addClass("active")
            .find("img")
            .attr("src","resources/images/logos/"+current_active+".png");

        // Update description
        $("#"+prev_active+"_desc").css("display","none");
        $("#"+current_active+"_desc").css("display","block");
     });
});
