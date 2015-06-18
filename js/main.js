/* jQuery Script Goes Here */

$(document).ready(function() { //if the DOM is ready

	/* Tab */

	$('.tab-menu').on('click', '.tab-marker li label', function() {

		var _this = $(this);

		var label_for_value = $.trim(_this.attr('for').toLowerCase()); //label for="tab-1"
		
		var parent_li = _this.parent('li').addClass('animation-slideDown'); //parent li of <label>

		var tab_content = _this.parents('.tab-menu').siblings('li').find("li." + label_for_value).addClass('animation-hingeUp'); //change tab-content animation here!
		
		tab_content.siblings('li').hide(); //hide other siblings li of .tab-menu

		tab_content.show(); //show assigned tab-content that matches the label for value
		
	});

});

/* 

	Recommended tab-content animations 

	1. animation-hingeUp

*/

