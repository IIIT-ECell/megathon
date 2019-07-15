window.onresize = function() {
    if ($(window).width() > 992) {
        $("#navbar-modal").modal("hide");
    }
};