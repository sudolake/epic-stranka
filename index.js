$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $(".nav").toggleClass("make-nav-black-when-click");
    $(".nav").toggleClass("line-under-nav");
    $("#mainListDiv").fadeIn();

});


$('.bodky-skusenosti').click(function () {
    $(".expandable-text-skusenosti").toggleClass('visible-text');
    $(this).toggleClass('hidden-text');
});

$('.bodky-historia').click(function () {
    $(".expandable-text-historia").toggleClass('visible-text');
    $(this).toggleClass('hidden-text');
});

$('.bodky-lucna').click(function () {
    $(".expandable-text-lucna").toggleClass('visible-text');
    $(this).toggleClass('hidden-text');
});
$('.read-more-lucna').click(function () {
    $(".expandable-text-lucna").toggleClass('visible-text');
    $(".bodky-lucna").toggleClass('hidden-text');
});