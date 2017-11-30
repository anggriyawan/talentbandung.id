// Hide Navigation Script
// Hide Header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = jQuery('.top-nav').outerHeight();

jQuery(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = jQuery(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        jQuery('.top-nav').removeClass('nav-down').addClass('nav-up');
        jQuery('.search').removeClass('nav-down').addClass('nav-up');
        jQuery('.site-logo').removeClass('nav-down').addClass('nav-up');
        jQuery('.title-menu').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + jQuery(window).height() < jQuery(document).height()) {
            jQuery('.top-nav').removeClass('nav-up').addClass('nav-down');
            jQuery('.search').removeClass('nav-up').addClass('nav-down');
            jQuery('.site-logo').removeClass('nav-up').addClass('nav-down');
            jQuery('.title-menu').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

// Search Filter Script
$(document).ready(function () {

    var filter = $('#filter');

    filter.on('keyup', function () {
        var grid = $(".grid");
        var search = this.value.toLowerCase();

        grid.each(function () {
            var namaGrid = $(this).find('.detail').text().toLowerCase();


            if (namaGrid.indexOf(search) != -1) {
                $(this).show(300);
            } else {
                $(this).hide(300);
            }
        })
    });

});


// Back to Top Script
jQuery(document).ready(function () {

    var offset = 250;

    var duration = 300;

    jQuery(window).scroll(function () {

        if (jQuery(this).scrollTop() > offset) {

            jQuery('.back-to-top').fadeIn(duration);

        } else {

            jQuery('.back-to-top').fadeOut(duration);

        }

    });



    jQuery('.back-to-top').click(function (event) {

        event.preventDefault();

        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);

        return false;

    })

});