module.exports = function(grunt) {

	grunt.initConfig({

		less: {

	  		development: {
	    		
		    	files: {

		      		"css/base.css": "less/base.less",
		      		"css/layout.css": "less/layout.less",
		      		"css/module.css": "less/module.less",
		      		"css/state.css": "less/state.less",
		      		"css/theme.css": "less/theme.less"

		    	}

	  		}

	  	},  //end less

	  	cssmin: {

	  		target: {

	  			files:[{

	  				expand: true,
	  				src:  ["css/*.css"],
	  				dest: "cssmin/",
	  				ext:  ".min.css"

	  			}]

	  		}

	  	},	//end cssmin

	  	watch: {

	  		css: {

	  			files: ["less/*.less"],
	  			tasks: ["less"]

	  		}

	  	
	  	} //end watch

	}); //end initConfig

	grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

} //end function