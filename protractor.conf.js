exports.config = {
  baseUrl: 'http://localhost:3000/',
  specs: ['./e2e/**/*.spec.ts'],
  directConnect: true,
  exclude: [],
  multiCapabilities: [{
    browserName:'chrome',
    shardTestFiles: true,
    maxInstances: 2
  }],
  allScriptsTimeout: 110000,
  getPageTimeout: 100000,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
   beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  useAllAngular2AppRoots: true
};
