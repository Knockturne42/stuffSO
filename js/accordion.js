// page FAQ ACCORDION

'use strict'

var $j = jQuery.noConflict();

	$j(document).ready(function(){
		$j( function() {
			$j( ".accordion" ).accordion({
				collapsible: true,
				heightStyle: "content",
				active: false
			});
		});			
	});
