$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
    })
});

$('.f1_container').click(function() {
    $(this).toggleClass('active');
});

$('.flip3D').click(function() {
    $(this).toggleClass('active');
});

(function() {
    var cards = document.querySelectorAll(".card.effect__click");
    for ( var i  = 0, len = cards.length; i < len; i++ ) {
        var card = cards[i];
        clickListener( card );
    }

    function clickListener(card) {
        card.addEventListener( "click", function() {
            var c = this.classList;
            c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
        });
    }
})();