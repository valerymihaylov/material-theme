$(document).ready(function(){

$(window).scroll(function() {
    $(".nav").offset().top > 50 ? $(".z-depth-0").removeClass("transparent") : $(".z-depth-0").addClass("transparent")
}),
    $(function() {
    $("a.page-scroll").bind("click", function(o) {
        var a = $(this);
        $("html, body").stop().animate({
            scrollTop: $(a.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), o.preventDefault()

    })
});

    $('body').on('click', 'a', function() {
        $('a.page-scroll.active').removeClass('active');
        $(this).addClass('active');
    });


});

/*$(document).ready(function () {

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
} */