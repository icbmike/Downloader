module.exports = function(grunt) {
  // Do grunt-related things in here

  	//TASKS
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//CONFIG
	grunt.initConfig({
  	
	  	pkg: grunt.file.readJSON('package.json'),
	  	
	  	//JSHINT Settings
	  	jshint: {
	  		src: ['Gruntfile.js', 'downloader/static/scripts/*.js']
	  	},

	  	//LESS Settings
		less: {
			development: {
				files: {
					'downloader/static/styles/style.css' : 'downloader/static/styles/style.less'
				}
			}
		},

		//WATCH Settings
		watch: {
			scripts: {
				files : 'downloader/static/scripts/**/*.js',
				tasks: ['jshint'],
				options: {
		            spawn: false,
		        }
			},
			styles: {
				files: 'downloader/static/styles/**/*.less',
				tasks: ['less'],
				options: {
		            spawn: false,
		        }
			}
		}

	});

	//Does everything
	grunt.registerTask('default', 'watch');
};
