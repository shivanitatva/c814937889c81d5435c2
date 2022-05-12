jQuery(document).ready(function () {
    var window_width = jQuery(window).width(),
    slider_item = jQuery(".hero-slider .slide-item").length;
    jQuery(".hero-slider .slide-item:first-child").addClass('active');
    // jQuery(".hero-slider .slide-item").height(window_width * 0.226);
    jQuery(".hero-slider .slide-item").width(window_width);
    jQuery(".hero-slider .slide-wrapper").width(window_width * slider_item);

    jQuery(".next-btn").click(function () {
        var dataIndex = jQuery(".hero-slider .slide-item.active").data("index") + 1;
        jQuery(".prev-btn").removeClass("disable");
        if (jQuery(".hero-slider .slide-item.active").next().length) {
            jQuery(".hero-slider .slide-item.active").addClass('next').next().addClass('active');
            jQuery(".hero-slider .slide-item.next").removeClass('active next');
            var current_active = jQuery(".hero-slider .slide-item.active").index();
            jQuery(".hero-slider .slide-wrapper").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
        if (dataIndex == 4) {
            jQuery(this).addClass("disable");
        }
    })

    jQuery(".prev-btn").click(function () {
        var dataIndex = jQuery(".hero-slider .slide-item.active").data("index") - 1;
        jQuery(".next-btn").removeClass("disable");
        if (jQuery(".hero-slider .slide-item.active").prev().length) {

            jQuery(".hero-slider .slide-item.active").addClass('prev').prev().addClass('active');
            jQuery(".hero-slider .slide-item.prev").removeClass('active prev');
            var current_active = jQuery(".hero-slider .slide-item.active").index();
            jQuery(".hero-slider .slide-wrapper").css("transform", "translateX(" + -(current_active * window_width) + "px)");
        }
        if (dataIndex == 1) {
            jQuery(this).addClass("disable");
        }
    })
});
jQuery(window).resize(function (event) {
    window_width = jQuery(window).width(),
    slider_item = jQuery(".hero-slider .slide-item").length;
    jQuery(".hero-slider .slide-item:first-child").addClass('active');
    // jQuery(".hero-slider .slide-item").height(window_width * 0.226);
    jQuery(".hero-slider .slide-item").width(window_width);
    jQuery(".hero-slider .slide-wrapper").width(window_width * slider_item);
    var current_active = jQuery(".hero-slider .slide-item.active").index();
    jQuery(".hero-slider .slide-wrapper").css("transform", "translateX(" + -(current_active * window_width) + "px)");

 });

