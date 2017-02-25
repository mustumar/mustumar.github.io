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
            // The optional number (700) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
<<<<<<< Updated upstream

$(document).click(function(e) {
=======
<<<<<<< Updated upstream
$(document).click(function (e) {
>>>>>>> Stashed changes
    if (!$(e.target).is('#myNavbar')) {
        $('.collapse').collapse('hide');        
    }
});
<<<<<<< Updated upstream
=======
=======

$(document).click(function(e) {
    if (!$(e.target).is('#myNavbar')) {
        $('.collapse').collapse('hide');        
    }
});
>>>>>>> Stashed changes

$(window).scroll(function(){
       $('.collapse').collapse('hide');
});
	
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
$(window).scroll(function () {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
});