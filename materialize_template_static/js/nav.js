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