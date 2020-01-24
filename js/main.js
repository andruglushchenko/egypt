$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        responsive:{
            0:{
                items:1
            },

            1200:{
                items:2
            },
            1700:{
                items:3
            }

        },
        nav:true
    });
    $('.nselect-1').nSelect();

});
$('.navbar-toggler').click(function () {
    $(this).toggleClass('navbar-toggler1')
})