$('.nav li a').click(function () {
    $('.nav li a').removeClass("actived");
    $(this).addClass("actived");
});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav ul.nav li a').each(function () {
        var currLink = $(this);
        var href = currLink.attr("href");
        var refElement = $(href);
        if (refElement.offset().top <= (scrollPos + 110) &&
            refElement.offset().top + refElement.height() > (scrollPos+110)) {
            console.log(href);
            $('nav ul.nav li a').removeClass("actived");
            currLink.addClass("actived");
        }
        else{
            currLink.removeClass("actived");
        }
    });
}

$(document).ready(function () {
    $(document).scroll(onScroll);
});
