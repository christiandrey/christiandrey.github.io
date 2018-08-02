$(document).ready(function (e) {

    $(".form-item input, .form-item textarea").focusin(function (e) {
        if ($(this).val() == "" || $(this).val() == null) {
            $(this).siblings(".form-label").addClass("is-focused");
        }
    });

    $(".form-item input, .form-item textarea").focusout(function (e) {
        if ($(this).val() == "" || $(this).val() == null) {
            $(this).siblings(".form-label").removeClass("is-focused");
        }
    });

    try {
        var waypoint = new Waypoint({
            element: document.getElementById('home'),
            handler: function () {
                $('.l-nav .indicator').css("left", 0);
                $('.l-nav .nav-main .brand-icon').css("margin-left", "-84px")
            }
        });

        var waypoint = new Waypoint({
            element: document.getElementById('who-we-are'),
            handler: function () {
                $('.l-nav .indicator').css("left", "25%");
                $('.l-nav .nav-main .brand-icon').css("margin-left", "0")
            },
            offset: 80
        });

        var waypoint = new Waypoint({
            element: document.getElementById('what-we-do'),
            handler: function () {
                $('.l-nav .indicator').css("left", "50%")
            },
            offset: 80
        });

        var waypoint = new Waypoint({
            element: document.getElementById('contact-us'),
            handler: function () {
                $('.l-nav .indicator').css("left", "75%")
            },
            offset: 100
        });
    } catch (e) {

    }

    $(".nav-link").click(function (e) {
        var scroll = "#" + $(this).attr("data-href");
        $.scrollTo(scroll,
            {
                duration: 600,
                offset: -80
            });
    });

    $("a.get-in-touch").click(function (e) {
        e.preventDefault();
        $.scrollTo("#contact-us", {
            duration: 600,
            offset: -80
        })
    });

    $("a.see-opportunities").click(function (e) {
        e.preventDefault();
        $.scrollTo("#careers-list", {
            duration: 600,
            offset: -80
        })
    });

    $("button.mvp-sprint-button").click(function (e) {
        e.preventDefault();
        $(".mvp-sprint-application").dreyanim({
            animationType: "fallInAlternate",
            animationTime: 350
        })
        $("body").css("overflow", "hidden");
    });

    $(".mvp-sprint-application .close-btn").click(function (e) {
        $(".mvp-sprint-application").dreyanim({
            animationType: "fallOut",
            animationTime: 400
        })
        $("body").css("overflow", "auto");
    });

    $(".form-message-wrapper .form-message-close").click(function (e) {
        $(this).parent().addClass("hidden");
    });

    // --------------------------------------------------------------
    // One year after, and the code in this file...doesn't exactly 
    // look like shit... Anyways, CAROUSEL
    // --------------------------------------------------------------

    $(".works-carousel").owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    $(".carousel-controls.prev").click(function () {
        $(".works-carousel").trigger("prev.owl.carousel");
    });

    $(".carousel-controls.next").click(function () {
        $(".works-carousel").trigger("next.owl.carousel");
    });
})