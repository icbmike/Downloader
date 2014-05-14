module.exports = function(grunt) {
  // Do grunt-related things in here

  grunt.initConfig({
  	jshint: {
  		src: ['Gruntfile.js', 'downloader/static/scripts/*.js']
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', 'jshint');
};
