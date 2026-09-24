const { test } = require('../fixtures/baseFixture');

test('Elements - Radio Button @smoke', async ({ common, radioButton }) => {
  await common.openPractice();
  await radioButton.open();
  await radioButton.selectYes();
  await radioButton.verifyYes();
});