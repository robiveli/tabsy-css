module.exports = function(grunt) {

    grunt.initConfig({

        settings: {
            srcPath: 'src/',
            distPath: 'dist/'
        },

        sass: {
            app: {
                files: [{
                    expand: true,
                    cwd: '<%= settings.srcPath %>',
                    src: ['**/*.scss'],
                    dest: '<%= settings.distPath %>',
                    ext: '.css'
                }],
                options: {
                    outputStyle: 'compressed',
                    sourceMap: false,
                    precision: 5
                }
            }
        },

        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: 'last 10 versions, Explorer >= 9'
                    })
                ]
            },
            dist: {
                src: '<%= settings.distPath %>*.css'
            }
        },

        htmlbuild: {
            build: {
                expand: true,
                cwd: '<%= settings.srcPath %>',
                src: '**/*.html',
                dest: '<%= settings.distPath %>'
            }
        },

        watch: {
            scss: {
                expand: true,
                files: ['<%= settings.srcPath %>sass/**/*.scss'],
                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['<%= settings.srcPath %>*.html'],
                tasks: ['htmlbuild'],
                options: {
                    spawn: false
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'postcss', 'htmlbuild']);

};