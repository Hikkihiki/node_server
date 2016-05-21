module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
	compile: {
		options: {
			optimize: "uglify2",
			mainConfigFile: 'src/scripts/main.js',
			generateSourceMaps: true,
			preserveLicenseComments: false,
			error: function(done, err) {
        			grunt.log.warn(err);
        			done();
      			},
			include: ['src/scripts/a.js'],
			out: "stdout",
		}
	}
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['requirejs']);

};
