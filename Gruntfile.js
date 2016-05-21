module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
	compile: {
		options: {
			optimize: "uglify2",
      baseUrl: "src",
			//mainConfigFile: 'public/scripts/main.js',
			generateSourceMaps: true,
			preserveLicenseComments: false,
			error: function(done, err) {
        			grunt.log.warn(err);
        			done();
      },
      //out: "stdout",
      dir: 'public/scripts',
      modules: [
        {
          name: 'both',
          create: true,
          include: ['helper/a', 'helper/b'],
        },
      ],
		}
	}
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['requirejs']);

};
