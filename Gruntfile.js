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
		}
	});
	//load grunt-contrib-uglify
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//make it default
	grunt.registerTask('default', ['uglify']);
	
};