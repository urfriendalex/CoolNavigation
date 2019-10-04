$(function() {
    $(".menu-item-1").hover(function() {
        $(".bg1").fadeIn(800);
    }, function() {
        $(".bg1").fadeOut(800);
    });
    $(".menu-item-2").hover(function() {
        $(".bg2").fadeIn(800);
    }, function() {
        $(".bg2").fadeOut(800);
    });
    $(".menu-item-3").hover(function() {
        $(".bg3").fadeIn(800);
    }, function() {
        $(".bg3").fadeOut(800);
    });
    $(".menu-item-4").hover(function() {
        $(".bg4").fadeIn(800);
    }, function() {
        $(".bg4").fadeOut(800);
    });
    $(".menu-item-5").hover(function() {
        $(".bg5").fadeIn(800);
    }, function() {
        $(".bg5").fadeOut(800);
    })
});

var tl = new TimelineMax({paused: true});

tl.to(".outer-content .title", 1, {
    opacity: 0
});
if ($(window).width() > 960){
    var wslide = '10%';
    var wmenu = '45%';
}else{
    var wslide = '20%';
    var wmenu = '80%';
}
tl.to(".menu-slide",1,{
    width: wslide,
    ease: Expo.easeInOut,
    delay: -1,
});
tl.to(".toggle-btn ion-icon",1,{
    color: "#000",
    ease: Expo.easeInOut,
    delay: -1,
});
tl.to(".menu", 2, {
    width: wmenu,
    ease: Expo.easeInOut
});
tl.staggerFrom(".menu ul li", 2, {y: 20 , opacity: 0, ease: Expo.easeInOut}, 0.1);
tl.to(".images", 2, {
    width: "45%",
    ease: Expo.easeInOut,
    delay: -2,
},"-=1");
tl.reverse();
$(document).on("click", ".toggle-btn", function() {
    tl.reversed(!tl.reversed());
    $(".toggle-btn").toggleClass('active');
});
$(document).on("click", ".sec-name", function() {
    tl.reversed(!tl.reversed());
});