module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jsdoc');

	grunt.initConfig({
		'pkg': grunt.file.readJSON('package.json'),

		'meta': {
			'jsFilesForTesting': [
				'app/bower_components/jquery/jquery.js',
				'app/bower_components/angular/angular.js',
				'app/bower_components/angular-route/angular-route.js',
				'app/bower_components/angular-sanitize/angular-sanitize.js',
				'app/bower_components/angular-resource/angular-resource.js',
				'app/bower_components/angular-mocks/angular-mocks.js',
				'app/bower_components/restangular/dist/restangular.js',
				'app/bower_components/underscore/underscore.js',
				'test/*.js'
			]
		},

		'karma': {
			'development': {
				'configFile': 'karma.conf.js',
				'options': {
					'files': [
						'<%= meta.jsFilesForTesting %>',
						'app/scripts/**/*.js'
					]
				}
			},
			'dist': {
				'options': {
					'configFile': 'karma.conf.js',
					'files': [
						'<%= meta.jsFilesForTesting %>',
						'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
					]
				}
			},
			'minified': {
				'options': {
					'configFile': 'karma.conf.js',
					'files': [
						'<%= meta.jsFilesForTesting %>',
						'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js'
					]
				}
			}
		},

		'jshint': {
			'beforeconcat': ['app/scripts/**/*.js']
		},

		'concat': {
			'dist': {
				'src': ['app/scripts/**/*.js'],
				'dest': 'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
			}
		},

		'uglify': {
			'options': {
				'mangle': false
			},
			'dist': {
				'files': {
					'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
				}
			}
		},

		'jsdoc': {
			'src': ['app/scripts/**/*.js'],
			'options': {
				'destination': 'doc'
			}
		}

	});

	grunt.registerTask('test', ['karma:development']);
	grunt.registerTask('build',
		[
			'jshint',
			'karma:development',
			'concat',
			'karma:dist',
			'uglify',
			'karma:minified',
			'jsdoc'
		]);

};