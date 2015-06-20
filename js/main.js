/* jQuery Script Goes Here */

$(document).ready(function() { //if the DOM is ready

	/* Tab */

	$('body').on('click', '.tab-marker li', function() {

		var _this = $(this);

		var label_for_value = _this.children('label').attr('for'); //label for="tab-1"
		
		var tab_content = _this.parents('.tab-menu').siblings('li').find("li." + label_for_value).addClass('animation-hingeUp'); //change tab-content animation here!
		
		tab_content.siblings('li').hide(); //hide other siblings li of .tab-menu

		tab_content.show(); //show assigned tab-content that matches the label for value

		
	});

	$('#tab-design-changer').on('change', function() {

		/* tab-design-changer */ 

		var _this = $(this);

		var no_rounded_design = ['tab-design-4','tab-design-8','tab-design-9','tab-design-10','tab-design-11'];

		var tab_design_value = $('#tab-design-changer').val();
		var background_value = $('#tab-background-changer').val();

		$('#temporary-container').load("tabs.html ." + tab_design_value);

		for (var x in no_rounded_design) {

			if (tab_design_value == no_rounded_design[x]) {

				$('#tab-rounding-changer').parent('div').hide();
				break;

			} else {

				$('#tab-rounding-changer').parent('div').show();

			}

		}

		_this.closest('div').siblings('div').children('select').prop('selectedIndex', 0); //go to closest div, find siblings (div), inside div find select, selectedIndex set to 0
		_this.closest('div').siblings('div').children('#tab-tight-options').hide();
	});

	$('#tab-background-changer').on('change', function() {

		/* tab-background-changer */

			var background_value = $('#tab-background-changer').val();
			var tab_main_container = $('.tab-main-container');

			tab_main_container.removeClass('tab-main-container-padded')
			tab_main_container.addClass(background_value);

	});

	$('#tab-spacing-changer').on('change', function() {

		/* tab-spacing-changer */
		var _this = $(this);
		var tab_marker = $('.tab-marker');
		var spacing_value = $('#tab-spacing-changer').val();

		tab_marker.removeClass('tab-marker-tight')
		tab_marker.addClass(spacing_value);

			if (spacing_value == "tab-marker-tight") {

				_this.siblings('select').show();

			} else {

				_this.siblings('select').hide();

			}

	});

	$('#tab-tight-options').on('change', function() {

		/* tab-spacng-changer */

		var tab_marker = $('.tab-marker');
		var option_value = $('#tab-tight-options').val();

		tab_marker.removeClass('tab-marker-tight-overlap tab-marker-tight-separator tab-marker-tight-transparent')
		tab_marker.addClass(option_value);

		if (option_value == 'tab-marker-overlap') {

			tab_marker.removeClass('tab-marker-tight-transparent tab-marker-tight-separator').addClass('tab-marker-tight-overlap');

		}

		if (option_value == 'tab-marker-tight-separator') {

			tab_marker.removeClass('tab-marker-tight-transparent').addClass('tab-marker-tight-overlap tab-marker-tight-separator');

		}

		if (option_value == 'tab-marker-tight-transparent') {

			tab_marker.removeClass('tab-marker-tight-transparent tab-marker-tight-separator').addClass('tab-marker-tight-transparent tab-marker-tight-overlap');

		}


	});

	$('#tab-rounding-changer').on('change', function() {

		/* tab-spacng-changer */

		rounding_value = $('#tab-rounding-changer').val();

		$('.tab-marker').removeClass('tab-marker-rounded-top')
		$('.tab-marker').addClass(rounding_value);


	});


});

/* 

	Recommended tab-content animations 

	1. animation-hingeUp

*/

