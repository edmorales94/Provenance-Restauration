$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    })
});

$('img.mapLink').on("click",function () {
        window.open('https://goo.gl/maps/gdAeVddaPcC2','_blank');
});

function openNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}