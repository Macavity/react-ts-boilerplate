

module.exports = function(grunt) {
    "use strict";

    var path = require("path");

    var pkg = grunt.file.readJSON("package.json");

    var sassEntryFiles = [
        { filename: "main", title: "Main" }
    ];

    var paths = {

        sass: path.join("sass"),
        images: path.join("sass", "images"),
        js: path.join("js"),

        dev: {
            js: path.join("dev", "js"),
            css: path.join("dev", "css"),
            images: path.join("dev", "css", "images")
        },

        dist: {
            js: path.join("dist", "js"),
            css: path.join("dist", "css"),
            images: path.join("dist", "css", "images")
        }

    };

    var styleFiles = {
        // Source files
        config: path.resolve(paths.sass, "config.rb"),

        // Generated files for development
        dev: { },

        // Production build paths
        dist: {  }
    };

    // Include every entry of sassEntryFiles into the Lists
    var i, filename;
    for(i = 0; i < sassEntryFiles.length; i++){
        filename = sassEntryFiles[i].filename;
        styleFiles[filename] = path.resolve(paths.sass, filename+".scss");
        styleFiles.dev[filename] = path.resolve(paths.dev.css, filename+".css");
        styleFiles.dist[filename] = path.resolve(paths.dist.css, filename+".min.css");
    }

    var jsFiles = {
        script: path.join(paths.js, "app.tsx"),

        dev: {
            script: path.join(paths.build.js, "script.js"),
            vendor: path.join(paths.build.js, "vendor.js")
        },

        dist: {
            script: path.join(paths.build.js, "script.min.js"),
            vendor: path.join(paths.build.js, "vendor.min.js")
        }
    };

    var getVendorFiles = function(path){
        var config = {};

        config[path] = [
            "node_modules/react/dist/react.min.js",                                     // React
            "node_modules/react-dom/dist/react-dom.min.js"
        ];

        return config;
    };

    /*
     * Dynamically generated array of all *.css => *.min.css files
     */
    var cssminFiles = function(){
        var files = {};

        var filename;
        for(var i = 0; i < sassEntryFiles.length; ++i){
            filename = sassEntryFiles[i].filename;

            files[styleFiles.build[filename]] = styleFiles.dev[filename];
        }

        return files;
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        /*
         * Copy Task
         */
        copy: {
            images: {
                files: [
                    {
                        expand: true,
                        cwd: paths.images,
                        src: '**/*',
                        dest: paths.dist.images,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: paths.images,
                        src: '**/*',
                        dest: paths.dev.images,
                        filter: 'isFile'
                    }
                ]
            }
        },

        browserify: {
            options: {
                browserifyOptions: {
                    debug: true
                }
            },
            scriptDev: {
                src: jsFiles.script,
                dest: jsFiles.dev.script,
                options: {
                    plugin: ['tsify']
                }
            },
            script: {
                src: jsFiles.script,
                dest: jsFiles.dist.script,
                options: {
                    plugin: ['tsify']
                }
            }

        },

        uglify: {

            script: {
                files: getScriptFiles()
            },

            search: {
                files: {
                    'mdeTemplates/js/standalone_search.min.js': [
                        "node_modules/jquery/dist/jquery.min.js",
                        "node_modules/scriptjs/dist/script.min.js",
                        jsFiles.build.searchDev
                    ]
                }
            },


            /*
             * Contains all commonly used third-party libraries
             */
            vendor: {
                files: getVendorFiles()
            },

            vendorDebug:{
                options: {
                    beautify: true,
                    compress: false
                },
                files: getVendorFiles()
            }

        },

        /*
         * Compass Task
         * Documentation: https://github.com/gruntjs/grunt-contrib-compass
         */
        sass: {

        },

        cssmin: {
            target: {
                files: cssminFiles()
            }
        },

        /*
         * Watches for changes in files and executes the tasks
         */
        watch: {

            /**
             * Watch for js changes during development and build Dev-Files
             */
            ts: {
                options: { cwd: paths.js },
                files: [ "**/*.ts", "**/*.tsx" ],
                tasks: [ "browserify:scriptDev" ]
            },

            css: {
                options: { cwd: paths.sass },
                files: [ "**/*" ],
                tasks: [ "sass" ]
            },

            images: {
                options: { cwd: paths.images },
                files: [ "**/*" ],
                tasks: [ "copy:images" ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.loadNpmTasks("grunt-shell");

    /**
     * Default Build task
     */
    grunt.registerTask("default", [
        "css-dev",
        "scripts-dev"
    ]);

    grunt.registerTask("build", [
        "css-dev",
        "css-min",
        "scripts-min"
    ]);

    /**
     * CSS: Production
     */
    grunt.registerTask("css-min", [
        "cssmin"
    ]);

    /**
     * CSS: Development
     */
    grunt.registerTask("css-dev", [
        "compass"
    ]);

    /**
     * Scripts: Production
     */
    grunt.registerTask("scripts-min", [
        "browserify:script",
        "uglify:script",
        "uglify:vendor"
    ]);

    /**
     * Scripts: Development
     */
    grunt.registerTask('scripts-dev', [
        "browserify:script",
        "uglify:vendor"
    ]);

    grunt.event.on("watch", function(action, filepath) {
        grunt.log.writeln(filepath + " has " + action);
    });
};
