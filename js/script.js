$(document).ready(function(){
    // $('.header').height($(window).height());
    

    $(window).scroll(function() {
        var startPx = $(window).scrollTop();
        startPx >= 50 ? $(".normal-nav").addClass("sticky-nav") :  $(".normal-nav").removeClass("sticky-nav");
    });

// SCROLL TO DIV
$('.nav-item a, .mouse-down a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1700, 'easeInOutQuint');
    event.preventDefault();
});
 
// SCROLLSPY
$(".navbar-nav").scrollspy({
    offset: 90
});

   })


// let numberEl = document.querySelectorAll("#lives-saved-banner-number");
// var incrementEl = document.querySelector("#increment");

// count = 100;
// $("#lives-saved-banner-number").text(count).css;

// let  livesSaved = [""];
// let numberOfLivesSaved = livesSaved.length;
// let count = 0;


// // $("lives-saved-banner-number").append(numberOfLivesSaved); 

// $("#lives-saved-banner-number").text(count);