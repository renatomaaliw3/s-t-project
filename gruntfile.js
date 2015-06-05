module.exports = function(grunt) {

	grunt.initConfig({

		less: {

	  		development: {
	    		
	    		options: {
	      		
	      			paths: ["less"]
	    		
	    		},
		    	files: {

		      		"css/base.css": "less/base.less",
		      		"css/layout.css": "less/layout.less",
		      		"css/module.css": "less/module.less",
		      		"css/state.css": "less/state.less",
		      		"css/theme.css": "less/theme.less"

		    	}

	  		}

	  	},  //end less

	  	watch: {

	  		css: {

	  			files: "less/*.less",
	  			tasks: ["less"]

	  		}

	  	}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

}