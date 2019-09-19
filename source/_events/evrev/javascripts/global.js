	  $(document).ready(
	    function() {
	      setInterval('swap_logos()', 3500);
	    }
	  );
	  
	  var visible_logo = 0;
	  function swap_logos() {
	    $('#logos_'+visible_logo).fadeOut(750);
	    visible_logo = (visible_logo == 7) ? 0 : visible_logo + 1;
	    $('#logos_'+visible_logo).fadeIn(750);
	  }