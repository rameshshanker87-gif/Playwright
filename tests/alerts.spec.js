const { test } = require('../fixtures/baseFixture');

test('Alerts, Frames, Windows - Alerts @regression', async ({ common, alerts }) => {
  await common.openPractice();
  await alerts.open();
  await alerts.verifyAlert();
});