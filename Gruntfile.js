module.exports = function(grunt) {
  // Do grunt-related things in here

  	//TASKS
  	grunt.loadNpmTasks('grunt-contrib-jshint');
  	grunt.loadNpmTasks('grunt-contrib-less');
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-react');
  	grunt.loadNpmTasks('grunt-browserify');

	//CONFIG
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

	  	//JSHINT Settings
	  	jshint: {
	  		all: [
	  			'Gruntfile.js', 
	  			'downloader/static/scripts/*.js',
	  			'!downloader/static/scripts/build.js'
  			]
	  	},

	  	//LESS Settings
	  	less: {
	  		development: {
	  			files: {
	  				'downloader/static/styles/style.css' : 'downloader/static/styles/style.less'
	  			}
	  		}
	  	},
	  	browserify: {
	  		options: {
	  			transform: [ require('grunt-react').browserify ]
	  		},
	  		app: {
	  			src: 'downloader/static/scripts/app.jsx',
	  			dest: 'downloader/static/scripts/build.js'
	  		}
	  	},

		//WATCH Settings
		watch: {
			scripts: {
				files : [
					'downloader/static/scripts/**/*.js',
					'downloader/static/scripts/**/*.jsx'
					],
				tasks: ['jshint', 'browserify'],
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
