

module.exports = function(grunt) {
    "use strict";

    var path = require("path");

    var pkg = grunt.file.readJSON("package.json");

    // New entry files should be listed here.
    // each file will get compass'ed ( _sass/[filename].scss => mdeTemplates/css/[filename].css )
    // and for production minified ( mdeTemplates/css/[filename].css => mdeTemplates/css/[filename].min.css )
    var sassEntryFiles = [
        { filename: "master", title: "MDE Master" },
        { filename: "mde", title: "MDE" },
    ];

    var paths = {

        sass: path.join("_sass"),
        images: path.join("_sass", "images"),
        js: path.join("js"),


        build: {
            js: path.join("mdeTemplates", "js"),
            css: path.join("mdeTemplates", "css"),
            images: path.join("mdeTemplates", "css", "images")
        }

    };

    var styleFiles = {
        // Source files
        config: path.resolve(paths.sass, "config.rb"),
        //master: path.resolve(paths.sass, "master.scss"),
        //mde: path.resolve(paths.sass, "mde.scss"),
        //kino: path.resolve(paths.sass, "app.scss"),

        // Unminified compass generated files
        dev: {
            //master: path.relative(paths.build.css, "master.css"),
            //mde: path.relative(paths.build.css, "mde.css")
        },

        // Production paths
        build: {
            //master: path.resolve(paths.build.css, "master.min.css"),
            //mde: path.resolve(paths.build.css, "mde.min.css")
        }
    };

    // Include every entry of sassEntryFiles into the Lists
    var i, filename;
    for(i = 0; i < sassEntryFiles.length; i++){
        filename = sassEntryFiles[i].filename;
        styleFiles[filename] = path.resolve(paths.sass, filename+".scss");
        styleFiles.dev[filename] = path.resolve(paths.build.css, filename+".css");
        styleFiles.build[filename] = path.resolve(paths.build.css, filename+".min.css");
    }


    var jsFiles = {
        script: path.join(paths.js, "app.tsx"),
        search: path.join(paths.js, "standalone_search.ts"),

        build: {
            scriptDev: path.join(paths.build.js, "script.js"),
            script: path.join(paths.build.js, "script.min.js"),
            searchDev: path.join(paths.build.js, "standalone_search.js"),
            search: path.join(paths.build.js, "standalone_search.min.js"),
            vendor: path.join(paths.build.js, "vendor.min.js")
        }
    };

    var getScriptFiles = function(){
        var config = {};

        config[jsFiles.build.script] = jsFiles.build.scriptDev;

        return config;
    };

    var getVendorFiles = function(){
        var config = {};

        config[jsFiles.build.vendor] = [
            // Basic Libraries
            "node_modules/npm-modernizr/modernizr.js",
            "node_modules/webcomponents.js/webcomponents.js",                       // Web components polyfill (load before jquery)
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/scriptjs/dist/script.min.js",

            // Common Libraries
            "node_modules/lazyloadxt/dist/jquery.lazyloadxt.min.js",                // lazy loading
            "node_modules/slick-carousel/slick/slick.min.js",                       // slider
            "node_modules/lodash/lodash.min.js", // lodash

            // Potentially async libraries (later)
            "node_modules/headroom.js/dist/headroom.min.js",                        // sticky Header
            "node_modules/jquery-match-height/dist/jquery.matchHeight-min.js",      // match heights of cols
            "node_modules/raty-js/lib/jquery.raty.js",                              // ratings stars
            "node_modules/react/dist/react.min.js",                                     // React
            "node_modules/react-dom/dist/react-dom.min.js",
            "node_modules/sidr/dist/jquery.sidr.min.js",                            // side menu
            "node_modules/shariff/build/shariff.min.js",                            // social sharing
            "node_modules/jquery-datetimepicker/jquery.datetimepicker.js",          // date/time picker
            "node_modules/devbridge-autocomplete/dist/jquery.autocomplete.min.js"   // autocomplete (temporary)
        ];

        return config;
    };

    var bannerTemplate = function(options){

        options = options || {};

        var name = options.name || "MDE";
        var version = " v"+options.version || "";
        var css = options.css || false;

        var banner = "";

        if(css){
            banner += '@charset "UTF-8";\n';
        }

        banner += '/*!\n' +
        ' * '+name+version+' - <%=grunt.template.today("yyyy-mm-dd HH:MM")%>\n' +
        ' * http://www.muenchen.de/\n' +
        ' * Copyright (c) <%=grunt.template.today("yyyy")%> Portal München Betriebs-GmbH & Co. KG\n'+
        ' */';

        return banner;
    };

    /**
     * Dynamicalle configure compass tasks based on sassEntryFiles
     * @returns {{}}
         */
    var compassConfig = function(){

        var config = {};
        var filename;

        for(var i = 0; i < sassEntryFiles.length; ++i){
            filename = sassEntryFiles[i].filename;

            config[filename] = {
                options: {
                    banner: bannerTemplate({name: sassEntryFiles[i].title, version: pkg.version, css:true}),
                    specify: [ path.join( paths.sass, filename + '.scss') ],
                    config: styleFiles.config,
                    cssDir: paths.build.css,
                    sassDir: paths.sass,
                    imagesDir: paths.images,
                    outputStyle: "expanded",
                    force: true
                    }
            };

        }

        return config;
    };

    /**
     * Dynamically generated array of all *.css => *.min.css files
     * @returns {{}}
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
                        dest: paths.build.images,
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
            script: {
                src: jsFiles.script,
                dest: jsFiles.build.scriptDev,
                options: {
                    plugin: ['tsify']
                }
            },

            search: {
                src: jsFiles.search,
                dest: jsFiles.build.searchDev,
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
        compass: compassConfig(),

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
                tasks: [ "browserify:script" ]
            },

            css: {
                options: { cwd: paths.sass },
                files: [ "**/*" ],
                tasks: [ "compass" ]
            },

            images: {
                options: { cwd: paths.images },
                files: [ "**/*" ],
                tasks: [ "copy:images" ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');

    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-concat");
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

    grunt.registerTask("build-search", [
        "browserify:search",
        "uglify:search"
    ]);

    // Used during development
    grunt.registerTask("test", function(){
        grunt.log.writeln("Path: "+path.join("_sass","js"));
    });
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
