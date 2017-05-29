// Karma configuration
// Generated on Sun May 28 2017 12:23:47 GMT-0400 (EDT)
module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
      'spec/*Spec.js',
      'spec/*spec.js'
    ],
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    port: 9876,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || 
    //                  config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS']
  })
}
