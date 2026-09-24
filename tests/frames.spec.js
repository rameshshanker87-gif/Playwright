const { test } = require('../fixtures/baseFixture');

test('Alerts, Frames, Windows - Frames @regression', async ({ common, frames }) => {
  await common.openPractice();
  await frames.open();
  await frames.verifyFrame();
});