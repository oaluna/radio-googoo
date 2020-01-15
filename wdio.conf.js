// wdio.conf.js
const app = require('./app');
const port = process.env.PORT || 4001;
const {connectAndDrop, disconnect} = require('./database');

let expressServer;

exports.config = {
  specs: [
    'test/features/*.js',
  ],
  coloredLogs: true,
  baseUrl: `http://localhost:${port}/`,
  framework: 'mocha',
  reporters: ['spec'],
  waitforTimeout: 10 * 1000,
  capabilities: [{
    browserName: 'phantomjs',
   
  }],
  services: ['phantomjs'],

  async onPrepare() {
    
    connectAndDrop();
    expressServer = app.listen(port);
  },
  async onComplete() {
disconnect();
    await expressServer.close();
  },
};
