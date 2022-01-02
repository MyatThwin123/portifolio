

//wow
 wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
}
)
wow.init();

//counter_up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
//typed_js

let typed3 = new Typed('#typed', {
    strings: ['Web Designer.', 'Web Developer.', 'UI UX Designer.'],
    typeSpeed: 60,
    backSpeed: 10,
    startDelay: 900,
    backDelay: 600,
    showCursor:false,
    smartBackspace: true, // this is a default
    loop: true
});
//nav-bar-position
let screenHeight = $(window).height();

$(window).scroll(function (){
    let currentPosition = $(this).scrollTop();


    if(currentPosition > screenHeight-100){
        $(".site-nav").addClass("site-nav-scroll");
    }else{
        $(".site-nav").removeClass("site-nav-scroll");
    }
});
//nav active
$(document).ready(function(){
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});
//circle progress bar
$('.first.circle').circleProgress({
    value: 0.6,
    thickness: 15,
    size:150,
    reverse:false,
    startAngle: 45,
    fill: {
        gradient: ["#11998e","#38ef7d"]
    },
    animationStartValue:0.0,
    lineCap:'round',

}).on('circle-animation-progress', function(event, progress, stepValue) {

    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");

});

$('.second.circle').circleProgress({
    value: 0.7,
    thickness: 15,
    size:150,
    reverse:false,
    startAngle: 45,
    fill: {
        gradient: ["#11998e","#38ef7d"]
    },
    animationStartValue:0.0,
    lineCap:'round',

}).on('circle-animation-progress', function(event, progress, stepValue) {

    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");

});

$('.third.circle').circleProgress({
    value: 0.75,
    thickness: 15,
    size:150,
    reverse:false,
    startAngle: 45,
    fill: {
        gradient: ["#11998e","#38ef7d"]
    },
    animationStartValue:0.0,
    lineCap:'round',

}).on('circle-animation-progress', function(event, progress, stepValue) {

    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");

});

$('.fourth.circle').circleProgress({
    value: 0.9,
    thickness: 15,
    size:150,
    reverse:false,
    startAngle: 45,
    fill: {
        gradient: ["#11998e","#38ef7d"]
    },
    animationStartValue:0.0,
    lineCap:'round',

}).on('circle-animation-progress', function(event, progress, stepValue) {

    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");

});

$('.fifth.circle').circleProgress({
    value: 0.75,
    thickness: 15,
    size:150,
    reverse:false,
    startAngle: 45,
    fill: {
        gradient: ["#11998e","#38ef7d"]
    },
    animationStartValue:0.0,
    lineCap:'round',

}).on('circle-animation-progress', function(event, progress, stepValue) {

    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");

});

$('.sixth.circle').circleProgress({
    value: 0.95,
    thickness: 15,
    size:150,
    reverse:false,
    startAngle: 45,
    fill: {
        gradient: ["#11998e","#38ef7d"]
    },
    animationStartValue:0.0,
    lineCap:'round',

}).on('circle-animation-progress', function(event, progress, stepValue) {

    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+"%");

});

//navbar active
