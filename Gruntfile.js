module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {

    		options: {
    			optimize: "uglify2",
          baseUrl: 'src',
    			mainConfigFile: 'src/main.js',
    			generateSourceMaps: true,
    			preserveLicenseComments: false,
    			error: function(done, err) {
            			grunt.log.warn(err);
            			done();
          },
          name: "main", // srce
          //out: "stdout",
          //dir: 'public/scripts',
          /*
          modules: [
            {
              name: 'both',
              create: true,
              include: ['helper/a', 'helper/b'],
            },
          ],
          */
    		},
        compile: {
          options: {
            out: "public/scripts/main-built.js",
          }
        },
        compile_haha: {
          options: {
            out: "public/scripts/haha.js",
          }
        },

    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.registerTask('default', ['requirejs']);

};
