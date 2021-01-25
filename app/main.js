$(function(){

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* header fixed */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        
        if( scrollOffset >= introH ){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    /* header fixed */

    /*Smooth scrol*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    /*Smooth scrol*/

    /*Menu nav toggle*/
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

        const menuLinks = document.querySelectorAll('.nav__link');
        const menu = document.querySelector('.nav');
        const menuToggle = document.querySelector('.nav-toggle');
        if (window.innerWidth <= 767) {
            for (let i = 0; i < menuLinks.length; i++){
                menuLinks[i].addEventListener('click', () => {
                    menu.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            }
        }
    });
    /*Menu nav toggle*/

});
