module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                files: {
                    'js/script.min.js': 'js/script.js'
                }
            }
        },

        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    "css/style.css": "less/style.less"
                }
            }
        },

        watch: {
            html: {
                files: [
                    'index.html'
                ],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['less/style.less', 'less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: [
                    'js/script.js'
                ],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less', 'uglify', 'watch']);

};