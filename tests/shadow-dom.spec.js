const { test } = require('../fixtures/baseFixture');

test('Advanced Level - Shadow DOM @regression', async ({ common, shadowDom }) => {
  await common.openPractice();
  await shadowDom.open();
  await shadowDom.verifyShadowContent();
});