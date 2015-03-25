module.exports = function (grunt) {

// Do grunt related things in here
		grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! I am Ugly! */\n',
				compress: true,
				mangle: true,
				sourceMap: true
			},
			target: {
				src: 'src/js/main.js',
				dest: 'dist/js/main.min.js'
			}
		},
		jshint: {
			options: {
        // Search for a .jshintrc file as usual
        jshintrc: true
        // Or, setup a specific path to the file
				// jshintrc: 'src/.jshintrc'
				// Or, setup inline settings
				// eqeqeq: true,
				// curly: true,
				// undef: true
			},
			target: {
				src: 'src/js/main.js'
			}
		}
	});
	//load grunt-contrib-uglify
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//make it default
	grunt.registerTask('default', ['uglify']);
	
	// Load the plugin that provides the "jshint" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//load server
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	// Default task(s).
	grunt.registerTask('default', ['jshint']);
	


	
	
	
};