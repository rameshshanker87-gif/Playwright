const { test } = require('../fixtures/baseFixture');

test('Elements - Check Box @smoke', async ({ common, checkBox }) => {
  await common.openPractice();
  await checkBox.open();
  await checkBox.expandHome();
  await checkBox.selectDesktop();
  await checkBox.verifySelection('Desktop');
});