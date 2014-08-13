module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
        		src: [
            		'js/lib/*.js', // All JS in the libs folder
            		'js/custom/*.js', // All JS in the custom folder
        		],
        		dest: 'js/main.js'
    		}
        },
        uglify: {
    		build: {
       		 	src: 'js/main.js',
        		dest: 'js/main.min.js'
   			}
		},
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'full-images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            } 
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['sass/**/*'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            } 

        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['uglify']);
};