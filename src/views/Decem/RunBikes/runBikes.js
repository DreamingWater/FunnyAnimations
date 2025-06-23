//click once to ride away and again to bring the bike back.

$(document).ready(function() {
    ride();
});

function ride() {
    $('.wrapper').click(function() {
        $(this).toggleClass('ride');
    });
}
