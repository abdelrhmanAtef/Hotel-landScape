$(window).ready(function () {
    $(".hotelbtn").click(function () {
        $(".overpage").fadeIn(1000);
    });
    $(".close").click(function () {
        $(".overpage").fadeOut(1000);
    });
    $(".hotelsora").click(function () {
        $(".overpage").css("z-index", "2");

    });

    /////////////////////////////////
    $(".btnn").click(function () {
        $(".overpage2").fadeIn(1000);
    });

    $(".end").click(function () {
        $(".overpage2").fadeOut(1000);
    });
    ////////////////////////////////////////
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > 500) {
            $(".navbar").css("background", "#1c1e20 ")
            $(".move").fadeIn(1000); 
        }
        else {
            $(".navbar").css("background", "none")
            $(".move").fadeOut(1000); 
        }
    });
    $(".navbar-light .navbar-toggler").click(function () {
        $(".navbar").css("background", "#1c1e20 ")
    });

    $(".navbar .nav-item a").click(function(){
        $("html , body").animate({scrollTop :$('#' + $(this).data("value")).offset().top },1500);
    });
   
    $(".move").click(function () {
        $("html , body").animate({ scrollTop: 0 }, 1500);
    });

    ////////////////////////////////////////
    $('[data-fancybox]').fancybox({
        protect: true
    });

    $(".acordion h3").click(function () {
        $(this).next().slideToggle(1000);
        $(".acordion ul").not($(this).next()).slideUp();
    });

    // $(".navbar-light .navbar-nav .nav-link").click(function(){
    //     $(this).addClass("run");
    // });


    $(".lds-ring div").fadeOut(3000,
        function () {
            $(this).parent().fadeOut(3000,
                function () {
                    $(this).remove();
                });
        });
});

