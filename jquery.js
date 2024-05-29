$(document).ready(function() {
    $('#start').click(function() {
        var confirmation = confirm("Are you sure you want to shutdown?");
        if (confirmation) {
            $('body').css('background-image', 'none').empty();
            $('html').css('background-color', 'black');
        }
    });
    $('.frameshown').dblclick(function() {
        var id = $(this).attr('id'); // Get the id of the element
        fullscreen(id); // Call the suprem function with the id as parameter
    })
});
