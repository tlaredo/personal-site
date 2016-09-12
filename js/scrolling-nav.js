//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 750, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Collapse mobile menu bar drawer on click
$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});