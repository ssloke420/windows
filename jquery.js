$(document).ready(function() {
    $('#start').click(function() {
        var confirmation = confirm("Are you sure you want to shutdown?");
        if (confirmation) {
            $('body').css('background-image', 'none').empty();
            $('body').css('background-color', 'black');
        }
    });
});
