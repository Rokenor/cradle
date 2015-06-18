module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		compass: {
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					noLineComments: true
				}
			}
		},
		autoprefixer: {
			prefixMe: {
				options: {
					browsers: ['last 6 version', '> 1%', 'ie 8']
				},
				files: {
					'css/style.css': ['css/style.css']
				}
			}
		},
		csso: {
			compress: {
				options: {
					report: 'min'
				},
				files: {
					'css/style.min.css': ['css/style.css']
				}
			}
		},
		watch: {
			compass: {
				files: ['scss/**/*.scss'],
				tasks: ['compass', 'autoprefixer', 'csso:compress']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['compass', 'autoprefixer', 'csso:compress', 'watch']);
};