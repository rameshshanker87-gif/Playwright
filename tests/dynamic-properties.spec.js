const { test } = require('../fixtures/baseFixture');

test('Elements - Dynamic Properties @regression', async ({ common, dynamicProperties }) => {
  await common.openPractice();
  await dynamicProperties.open();
  await dynamicProperties.verifyDynamicButton();
  await dynamicProperties.verifyColorButton();
});