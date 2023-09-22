$(document).ready(function(){
    $('.nav-tabs #small-beginnings').tab('show');

    setTimeout(() => {
        AOS.init();
    }, 120);

    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });
} );