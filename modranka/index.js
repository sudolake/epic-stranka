$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $(".nav").toggleClass("make-nav-black-when-click");
    $(".nav").toggleClass("line-under-nav");
    $("#mainListDiv").fadeIn();

});



