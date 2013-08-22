
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["./css"],
        mkdir: {
            build: {
                options: {
                    create: [
                        './css'
                    ]
                }
            }
        },
        less: {
            uncompresed: {
                options: {
                    paths: ['./less'],
                    report: 'gzip'
                },
                files: {
                    "./css/animate.css": "./less/animate.less"
                }
            },
            compresed: {
                options: {
                    paths: ['./less'],
                    yuicompress: true,
                    report: 'gzip'
                },
                files: {
                    "./css/animate.min.css": "./less/animate.less"
                }
            }
        },
        watch: {
            less: {
                files: [
                    './less/**/*.less'
                ],
                tasks: ['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');

    grunt.registerTask('default', [
        'clean',
        'mkdir',
        'less',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'mkdir',
        'less'
    ]);
};
