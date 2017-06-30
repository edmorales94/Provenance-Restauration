$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    });
});

function openNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

$(document).ready(function () {
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
});

$(document).ready(function () {
    $(".btn").click(function (event) {
        $(this).blur();
    });
});