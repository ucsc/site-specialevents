$(document).ready(function() {
   /** 
    *   Configures the sliding 'Enjoy the View' functionality on each page
    */
    
    $('.js .sleed').tabSlideOut({
        tabHandle: '.handle',             // class of the element that will be your tab                       
        pathToTabImage: 'https://static.ucsc.edu/images/tab.png', // path to the image for the tab (optionaly can be set using css)           
        imageHeight: '30px',              // height of tab image                                              
        imageWidth: '15px',               // width of tab image                                                
        tabLocation: 'right',             // side of screen where tab lives, top, right, bottom, or left     
        speed: 400,                       // speed of animation                                               
        action: 'click',                  // options: 'click' or 'hover', action to trigger animation         
        topPos: '0px',                    // position from the top                                              
        fixedPosition: false              // options: true makes it stick(fixed position) on scroll             
      });
});