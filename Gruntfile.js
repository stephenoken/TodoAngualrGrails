module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            production: {
                options: {
                    compress: true
                },
                files: {
                    'src/main/webapp/css/main.css':'grails-app/assets/stylesheets/less/main.less'
                }
            }
        },

        watch: {
            grunt: {files:['Gruntfile.js']},

            less: {
                files:'grails-app/assets/stylesheets/less/**/*.less ',
                tasks: ['less']
            },

            concat:{
                files:'grails-app/assets/javascripts/**/*.js',
                tasks:['concat']
            },

            copy:{
                files:'grails-app/assets/views/**/*',
                tasks:['copy']
            },

            options: {
                livereload: true
            }
        },

        bower: {
            install: {
                options: {
                    //cleanTargetDir: false,
                    //cleanBowerDir: true,
                    targetDir: './src/main/webapp/lib/',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: true,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        },

        concat:{
            options:{
                separator:';'
            },
            dist:{
                src:['grails-app/assets/javascripts/**/*.js'],
                dest:'./src/main/webapp/js/build.js'
            }
        },

        copy:{
            main:{
                expand:true,
                cwd:'grails-app/assets/views/',
                src: '**',
                dest:'./src/main/webapp/views/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build',['less','concat', 'copy']);
    grunt.registerTask('bootstrap',['bower:install']);
    grunt.registerTask('watcher',['watch']);
    grunt.registerTask('default',['build','watch','concat']);
}