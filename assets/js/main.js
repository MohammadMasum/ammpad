;
(function($) {
    $(document).ready(function() {

        /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
        $(".header-area").sticky();

        $(".navbar-toggler").on("click", function() {
            $(".header-area").toggleClass("active");
        });

        /*---------------------------------
		Javascript for wow animation
		----------------------------------*/
        new WOW().init();


    })
}(jQuery));