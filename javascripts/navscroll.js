
    $(window).scroll(function(){
        const $nav = $(".nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() );
})