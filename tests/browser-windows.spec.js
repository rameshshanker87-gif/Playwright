const { test } = require('../fixtures/baseFixture');

test('Alerts, Frames, Windows - Browser Windows @regression', async ({ common, browserWindows }) => {
  await common.openPractice();
  await browserWindows.open();
  await browserWindows.verifyNewTab();
  await browserWindows.verifyNewWindow();
});