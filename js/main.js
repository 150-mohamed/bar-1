let aboutOffset = $("#About").offset().top;
$(window).scroll(() => {
    let wScroll = $(window).scrollTop();
    if (wScroll > aboutOffset - 80) {
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.6)");
        $("#main-nav").css("padding-left", "50px");
        $("#main-nav").css("padding-right", "50px");
        $("#btnUp").fadeIn(500);
    }
    else {
        $("#main-nav").css("backgroundColor", "transparent");
        $("#main-nav").css("padding-left", "0px");
        $("#main-nav").css("padding-right", "0px");
        $("#btnUp").fadeOut(500);
    }
});
$("a[href^='#']").click((e) => {
    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({ scrollTop: sectionOffset }, 2000)
});
$(document).ready(function () {
    $("#loading .lds-facebook").fadeOut(1000, () => {
        $("#loading").fadeOut(1000, () => {
            $("body").css("overflow-y", "auto")
            $("#loading").remove();
        });
    });
    $('.owl-carousel').owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        center: true,
    });
});
let colorsItem = $(".color-item");
$(".color-item").eq(0).css("backgroundColor", "green");
$(".color-item").eq(1).css("backgroundColor", "#09c");
$(".color-item").eq(2).css("backgroundColor", "teal");
$(".color-item").eq(3).css("backgroundColor", "lightgreen");
$(".color-item").eq(4).css("backgroundColor", "orange");
colorsItem.click(function () {
    let bgColor = $(this).css('backgroundColor');
    $("h2,p").css("color", bgColor)
});
$(".sideBar i").click(function () {
    let boxWidth = $('.colors-box').innerWidth();
    if ($(".sideBar").css("left") == "0px") {
        $(".sideBar").animate({ left: -boxWidth }, 1000)
    }
    else {
        $(".sideBar").animate({ left: "0px" }, 1000)
    }
});


import { calcSalary, workHours } from './workModule.js';
console.log(workHours);