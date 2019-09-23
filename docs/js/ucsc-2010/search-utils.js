$(document).ready(function() {
  // Clears the default value from the search box when the user clicks inside of it.
  $('#utilities input[type="text"]').focus(function() {
      // clear value if current value is the default
      if($(this).val() == this.defaultValue) { $(this).val(""); }
  });
});