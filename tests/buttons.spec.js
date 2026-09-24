const { test } = require('../fixtures/baseFixture');

test('Elements - Buttons @smoke', async ({ common, buttons }) => {
  await common.openPractice();
  await buttons.open();
  await buttons.doubleClick();
  await buttons.rightClick();
  await buttons.dynamicClick();
  await buttons.verifyMessages();
});