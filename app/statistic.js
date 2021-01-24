let statOffset = $("#statistics").offset().top - ($(window).height() - $("#statistics").innerHeight() / 2)
  , scrollPoss = $(window).scrollTop();
function animNumb(e, s) {
    $(".stat__count:eq(" + e + ")").animate({
        num: s
    }, {
        duration: 5e3,
        step: function(e) {
            this.innerHTML = e.toFixed(0)
        }
    })
}
scrollPoss >= statOffset && (animNumb(0, 42),
    animNumb(1, 123),
    animNumb(2, 15),
    animNumb(3, 99),
    animNumb(4, 24)),
    $(window).scroll((function() {
        scrollPoss = $(window).scrollTop(),
        scrollPoss >= statOffset && (animNumb(0, 42),
        animNumb(1, 123),
        animNumb(2, 15),
        animNumb(3, 99),
        animNumb(4, 24))
    }
));