import { launchApp, awaitReady, stopApp } from '../../../config/e2e-common';
import { expect } from 'chai';

describe('Home', function() {

  let app: any;
  let browser: WebdriverIO.Client<void>;

  beforeEach(() => {
    app = launchApp();
    return awaitReady(app).then(() => {
      browser = app.client;
    });
  });

  afterEach(() => {
    return stopApp(app);
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular Electron Dream Starter by Colin Skow & @AngularClass';
    return expect(subject).to.eventually.equal(result);
  });

  it('should have `your content here` x-large', () => {
    let subject = browser.getText('[x-large]');
    let result  = 'Your Content Here';
    return expect(subject).to.eventually.equal(result);
  });

});
