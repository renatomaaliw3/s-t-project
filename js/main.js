/* jQuery Script Goes Here */

$(document).ready(function() { //if the DOM is ready

	/* Tab */

	$('.tab-menu').on('click', '.tab-marker li label', function() {

		var _this = $(this);
		var label_for_text = $.trim(_this.attr('for').toLowerCase()); //get the label text
		var tab_content = _this.parents('.tab-menu').siblings('tr').find("td." + label_for_text); //find td that matches the label_text
		
		tab_content.siblings('td').hide(); 
		tab_content.show();
		

	});

});