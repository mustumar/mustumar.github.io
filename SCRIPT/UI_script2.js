$(document).ready(function () {
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {});
        } // End if
    });
});
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse");
        if (_opened === true && !clickover.hasClass("navbar-toggle") && clickover.parents('.navbar-collapse').length == 0) {
            $("button.navbar-toggle").click();
        }
    });
});
$(window).scroll(function () {
    $("#sectionHome").css("opacity", 1 - $(window).scrollTop() / 1250);
});