/* =Main INIT Function
-------------------------------------------------------------- */
function initializeForm() {

	"use strict";

	//PARALLAX EFFECTS
	$('.parallax').each(function() {
		$(this).parallax("50%", 0.5);
	});
	
	//NAVIGATION CUSTOM FUNCTION
	(function() {
		function navigationInit(){


			//DROPDOWNS
			$('li.drop a.drop-btn').click(function() {
				$('.drop-list').slideUp();
				$('li.drop a.open').removeClass('open');

				if($(this).next('ul.drop-list').is(':visible')) {
					$(this).next('ul.drop-list').slideUp();
					$(this).removeClass('open');
				}

				else {
					$(this).next('ul.drop-list').slideDown();
					$(this).addClass('open');
				}

				return false;
				
			});

			//MAGIC LINE
			$(function() {

			    var $el, leftPos, newWidth,
			        $mainNav = $(".nav-content");
			   
			    var $magicLine = $("#magic-line");
			    
			    $magicLine
			        .width($("nav.desktop .current-page").width() - 0 + "px")
			        .css("left", $(".current-page").position().left)
			        .data("origLeft", $magicLine.position().left)
			        .data("origWidth", $(".current-page").width());
			        
			    $(".nav-content li.upper").hover(function() {
			        $el = $(this);
			        leftPos = $el.position().left;
			        newWidth = $el.width();
			        $magicLine.stop().animate({
			            left: leftPos,
			            width: newWidth
			        });
			    }, function() {
			        $magicLine.stop().animate({
			            left: $magicLine.data("origLeft"),
			            width: $magicLine.data("origWidth")
			        });    
			    });

			    $(window).scroll(function() {
			       $magicLine.width($("nav.desktop .current-page").width() - 0 + "px").css("left", $(".current-page").position().left); 
			    });

			});

		}

		$(document).on("ready", navigationInit);
	})();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(document).ready(function(){

	initializeForm();

});
/* END ------------------------------------------------------- */


/* SMOOTH SCROLL --------------------------------------------- */

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/* Header Scroll Fade ---------------------------------------- */

$(window).scroll(function() {    

var scroll = $(window).scrollTop();

if (scroll >= 100) {
	$(".header-container").addClass("header-background");
}
if (scroll <= 100) {
	$(".header-container").removeClass("header-background");
}


});