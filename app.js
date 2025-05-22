$(document).ready(function() {
    function hideNavOnResize() {
        if ($(window).width() <= 992) {
            $('.nav_ul').hide();
        } else {
            $('.nav_ul').show();
        }
    }

})    

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $("#navbarNav").slideToggle();
    });

    
});