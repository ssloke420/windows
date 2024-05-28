 $(document).ready(function() {
      $('#start').click(function() {
          var confirmation = confirm("Are you sure you want to make the entire page blank?");
          if (confirmation) {
               $('body').empty();
          }
      });
 });
