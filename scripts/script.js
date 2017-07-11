$(document).ready(function () {
    $('.carousel').carousel({
        interval: 4700
    });
});

function openNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
};

$(document).ready(function () {
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
});

$(document).ready(function () {
    $(".btn").click(function () {
        $(this).blur();
    });
});

$(window).scroll(function () {
    if($(document).scrollTop() > 100){
        $('nav').addClass('wood');
    }
    else{
        $('nav').removeClass('wood');
    }
});