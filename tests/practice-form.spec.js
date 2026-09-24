const { test } = require('../fixtures/baseFixture');
const { readJsonData } = require('../utils/testData');

test('Forms - Practice Form @smoke', async ({ common, practiceForm }) => {
  const data = readJsonData('practiceData.json').practiceForm;
  await common.openPractice();
  await practiceForm.open();
  await practiceForm.fillForm(data);
  await practiceForm.submitForm();
  await practiceForm.verifySubmission();
});