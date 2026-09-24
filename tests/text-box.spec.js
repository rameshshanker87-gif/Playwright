const { test, expect } = require('../fixtures/baseFixture');
const { readJsonData } = require('../utils/testData');

test.describe('Elements - Text Box', () => {
  test('should submit Text Box using JSON data @smoke', async ({ common, textBox }) => {
    const data = readJsonData('practiceData.json').textBox;

    await test.step('Open practice application', async () => {
      await common.openPractice();
    });

    await test.step('Open Text Box module', async () => {
      await textBox.open();
    });

    await test.step('Enter external JSON test data', async () => {
      await textBox.fillForm(data);
    });

    await test.step('Submit and validate output', async () => {
      await textBox.submitForm();
      await expect(textBox.page.locator('body')).toContainText(data.fullName);
      await expect(textBox.page.locator('body')).toContainText(data.email);
    });
  });
});