var mq = window.matchMedia("(min-width: 768px)");

/*function myFunction(x) {
    x.classList.toggle("change");
}*/

$(document).ready(function () {



    $(window).scroll(function () {
        if (mq.matches) {
            $(".bg-img").css("top", 6.2 - $(window).scrollTop() / 40 + "vw");
            $('.txt').css("opacity", 1 - $(window).scrollTop() / 200);
            $('.re-link').css("opacity", 1 - $(window).scrollTop() / 200);
            //$('.nav-2nd-btn').css("top", 6.3 - $(window).scrollTop() / 150 + "vw");




        } else {
            //$(".bg-img").css("top", 0 - $(window).scrollTop() / 60 + "vw");
        }
    });

    
    
    if (mq.matches){
        $("a").on('click', function (event) {
        var navHeight = $(".navigation").height();

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navHeight
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

        
    }
    else{
        $("a").on('click', function (event) {
        

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
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
        
        $(".m-navigation").click(function () {
        $( ".m-navigation").toggleClass("change");
        $(".navigation").toggle();
    });
    $(".navigation-btn").click(function(){
        $( ".m-navigation").toggleClass("change");
        $(".navigation").toggle();
        
    });

    }
    


    // Add smooth scrolling to all links


});
