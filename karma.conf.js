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

        basePath: '',

        frameworks: ['mocha', 'requirejs', 'chai'],

        files: [
          'test/**/*'
        ],

        exclude: [
        ],

        preprocessors: {
            './src/**/*': preprocessors,
            './test/**/*.jsx': preprocessors
        },

        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },

        webpackServer: {
            noInfo: false
        },

        webpack: webpack,

        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            includeAllSources: true,
            check: {
                global: globalCoverage
            }
        },

        reporters: ['progress', 'coverage'],

        thresholdReporter: {
            global: globalCoverage,
            projects: globalCoverage
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Firefox'],
        singleRun: false,
        concurrency: Infinity
    });
}
