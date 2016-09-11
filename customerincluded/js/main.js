
$(document).ready(function(){	
    $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
  
    $(window).scroll(function(event) {
        $(".advantage .box").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("scroll-action");
                el.addClass("atscroll");
            }
        });
    });
    
    function detectmob() {
        if (navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
                ) {
            return true;
        }
        else {
            return false;
        }
    }
    
    if(detectmob()){
        $('body').addClass('mobile');
    }else{
        $('body').addClass('desktop');
    }
    
    $(window).stellar({
        positionProperty: 'transform'
    });

    $(".b-way-2 .b-day").hide();
    
    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        if(myHeight < 850){
            $(".top-menu").addClass("small");
        }else{
            $(".top-menu").removeClass("small");
        }

        $(".b-map-canvas").css({
            "height" : myHeight-150,
            "width" : myWidth-150
        });
    }
    $(window).resize(resize);
    resize();

    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
          $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
              input.val('');
              input.removeClass('placeholder');
            }
          }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
              input.addClass('placeholder');
              input.val(input.attr('placeholder'));
            }
          }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
              var input = $(this);
              if (input.val() == input.attr('placeholder')) {
                input.val('');
              }
          })
        });
      }
    }
    $.fn.placeholder();

//    customHandlers["staff"] = function(el){
//        $(".b-name").text(el.attr("data-name"));
//        $(".b-subject").val("Консультация - "+el.attr("data-name"));
//    };
    
    $(".b-burger-button").click(openMenu);

    $(".menu-overlay, .top-menu li").on("click",closeMenu);

    $(".b-click").on("click",function(){
        $($(this).attr("data-click")).trigger("click",true);
        closeMenu();
    });

    function openMenu(){
        $(".menu-overlay").fadeIn(300);    
        $(".top-menu").addClass("shown");
        $(".b-burger-button").addClass("opened").unbind("click").bind("click",closeMenu);
        $("html").css("overflow","hidden");
        return false;
    }

    function closeMenu(){
        $(".menu-overlay").fadeOut(300);
        $(".top-menu").removeClass("shown");
        $(".b-burger-button").removeClass("opened").unbind("click").bind("click",openMenu);
        $("html").css("overflow","auto");
        if( !$(".thankyou").length ) return false;
    }

    $( window ).load(function() {
        $(window).scroll(whenScroll);
    });

    function whenScroll(){
//        var height = $( ".b-case" ).offset().top+$( ".b-case" ).height()-$( ".b-case .left" ).height()-10;
//        if($('body').scrollTop() >= ($( ".b-case" ).offset().top-10) && $('body').scrollTop() <= height) {
//            $( ".b-case .left" ).removeClass("abs").addClass("fixed");
//        } else if($('body').scrollTop() >= height){
//            $( ".b-case .left" ).removeClass("fixed").addClass("abs");
//        } else {
//            $( ".b-case .left" ).removeClass("fixed abs");
//        }
    }

//    $(".b-case-desc .b-more").click(function(){
//        $(this).parents(".b-case-desc").find(".b-hidden-tasks").fadeIn(300);
//        $(this).delay(100).hide();
//        whenScroll();
//        return false;
//    });

    $(".b-left-thumbs li").click(function(){
        if($(this).hasClass('active')) return false;
        var obj = $(this).closest(".b-block");
        var prev = obj.find(".b-left-thumbs li.active").index();
        obj.find(".b-left-thumbs li").eq(prev).removeClass("active");
        $(this).addClass("active");
        obj.find(".b-slide").eq(prev).hide();
        obj.find(".b-slide").eq($(this).index()).fadeIn();
        $(".b-gallery:visible").slick('setPosition');
        $("body, html").animate({
            scrollTop : obj.find(".b-slider").offset().top-10
        },800);
    });
     
    $(".b-gallery").slick({
        // autoplay: true,
        dots: true,
        infinite: true,
        prevArrow: "<span class='b-way-nav b-way-nav-left'></span>",
        nextArrow: "<span class='b-way-nav b-way-nav-right'></span>"
    });
    
    var countpeople = $(".b-staff .b-left-thumbs li").length-1;
    $(".b-staff-nav").click(function() {
        var obj = $(this).closest(".b-staff");
        var prev = obj.find(".b-left-thumbs li.active").index();
        obj.find(".b-left-thumbs li").eq(prev).removeClass("active");
        obj.find(".b-slide").eq(prev).hide();
        if($(this).hasClass("b-left-butt")) {
            prev = (prev == 0) ? countpeople : prev-1;          
        }
        if($(this).hasClass("b-right-butt")) {
            prev = (prev == countpeople) ? 0 : prev+1;           
        }
        obj.find(".b-left-thumbs li").eq(prev).addClass("active");
        obj.find(".b-slide").eq(prev).fadeIn();
    });

    if(window.location.hash != "" && window.location.hash != "#") {
        $(".top-menu li[data-hash='"+window.location.hash+"']").click();
    }
  //  customHandlers["map"] = function(el){
//        var myPlace = new google.maps.LatLng(55.804334, 37.585971);
//        var myOptions = {
//            zoom: 17,
//            center: myPlace,
//            mapTypeId: google.maps.MapTypeId.ROADMAP,
//            disableDefaultUI: true,
//            scrollwheel: false,
//            zoomControl: true
//        }
//        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
//
//        var marker = new google.maps.Marker({
//            position: myPlace,
//            map: map,
//            title: "Офис 500lux"
//        });
 //   }

    $(".b-watch-content").click(function(){
        return fancyOpen($('#b-popup-commerse-ex'));
    });

    $(".b-watch-comm").click(function(){
        return fancyOpen($('#b-popup-commerse'));
    });
    var step = 0;
    $(".b-steps li").mouseenter(function(){
        $(this).addClass("hover");
    });

    $(".b-steps li").mouseleave(function(){
        $(this).removeClass("hover");
    });
    setInterval(function() {
        if(step < 6) { 
            if(step == 0) $(".b-steps li").eq(5).mouseleave(); else $(".b-steps li").eq(step-1).mouseleave();
            $(".b-steps li").eq(step).mouseenter();
            step++;
        } else step = 0;
    }, 2000);
    
    $(".dev-link").click(function(){
        $(".b-footer .b-dev-cont").fadeToggle()
        return false;
    });
    //  var options = {
    //     $AutoPlay: true,                                
    //     $SlideDuration: 500,                            

    //     $BulletNavigatorOptions: {                      
    //         $Class: $JssorBulletNavigator$,             
    //         $ChanceToShow: 2,                           
    //         $AutoCenter: 1,                            
    //         $Steps: 1,                                  
    //         $Lanes: 1,                                  
    //         $SpacingX: 10,                              
    //         $SpacingY: 10,                              
    //         $Orientation: 1                             
    //     }
    // };

    // var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});