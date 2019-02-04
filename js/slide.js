//SLIDER

'use strict'

var $u = jQuery.noConflict();
	
$u(document).ready(function(){
	
    $u('.flexslider').flexslider({
		slideshow: true,
		randomize: false,	
		slideshowSpeed : 4000,
		animation : "slide",
		animationLoop : true,
		directionNav: false,
		//controlNav: false
	});
	
});