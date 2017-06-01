// Karma configuration
// Generated on Mon May 15 2017 20:45:43 GMT-0300 (BRT)

var path = require('path');
var webpack = require('./webpack.config.js');
webpack.entry = {};

function isCoverage(argument) {
    return argument === '--coverage';
}

module.exports = function(config) {
    var coverageReporter, preprocessors = ["webpack"];

    var globalCoverage = {
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50
    };

    if (process.argv.some(isCoverage))
        config.reporters.push("text-summary-projects");

    var plugins = config.plugins;

    config.set({

        plugins: plugins,

        basePath: './',

        frameworks: ['mocha', 'requirejs', 'chai'],

        files: [
			'test/**/*'
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

        webpack: webpack,

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            includeAllSources: true,
            check: {
                global: globalCoverage
            }
        },

        thresholdReporter: {
            global: globalCoverage,
            projects: globalCoverage
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
}
