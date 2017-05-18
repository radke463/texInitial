// Karma configuration
// Generated on Mon May 15 2017 20:45:43 GMT-0300 (BRT)

var path = require('path');

function isCoverage(argument) {
    return argument === '--coverage';
}

module.exports = function(config) {
    var webpack, coverageReporter, preprocessors = ["webpack"];

    var globalCoverage = {
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70
    };

    webpack = Object.assign({}, config.webpack);

    if (process.argv.some(isCoverage))
        config.reporters.push("text-summary-projects");

    var plugins = config.plugins;

    config.set({

        plugins: plugins,

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
          'helpers/test-main.js',
          'helpers/helpers.js',
          'helpers/dom.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './src/**/*': preprocessors,
            './test/**/*': preprocessors
        },

        webpack: webpack,

        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            check: {
                global: globalCoverage
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        thresholdReporter: {
            global: globalCoverage,
            projects: globalCoverage
        },


        // web servere port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Firefox', 'Safari', 'IE'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
}
