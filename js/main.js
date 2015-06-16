/* jQuery Script Goes Here */

$(document).ready(function() { //if the DOM is ready

	/* Tab */

	$('.tab-menu').on('click', '.tab-marker li label', function() {

		var _this = $(this);
		var label_for_value = $.trim(_this.attr('for').toLowerCase()); //get the label text
		var tab_content = _this.parents('.tab-menu').siblings('li').find("li." + label_for_value).addClass('animation-hingeUp'); //change tab-content animation here!
		
		tab_content.siblings('li').hide();
		tab_content.show();
		
	});

});

/* 

	Recommended tab-content animations 

	1. animation-hingeUp

*/

