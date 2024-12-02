lucide.createIcons();


$(".box").on("mouseenter", function (e) {
    $(this).find(".shape-img").attr("src", "app/images/shapes/circles-white.svg");
})
$(".box").on("mouseleave", function (e) {
    $(this).find(".shape-img").attr("src", "app/images/shapes/circles.svg");
})