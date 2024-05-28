 $(document).ready(function() {
      $('#start').click(function() {
          var confirmation = confirm("Are you sure you want to make shutdown?");
          if (confirmation) {
               $('body').empty();
          }
      });
 });
