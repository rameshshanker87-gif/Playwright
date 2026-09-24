const { expect } = require('@playwright/test');

class RadioButtonPage {
  constructor(page) {
    this.page = page;
    this.yes = page.getByLabel('Yes');
    this.impressive = page.getByLabel('Impressive');
  }

  async open() {
    //await this.page.getByText('Radio Button', { exact: true }).click();
     await this.page.getByRole('complementary').getByRole('link', { name: 'Radio Button', exact: true }).click();
  }

  async selectYes() {
    //await this.yes.check();
     await this.page.locator('label').filter({ hasText: 'Yes' }).click();
  }

  async verifyYes() {
    await expect(this.page.getByText('You have selected Yes')).toBeVisible();
  }
}
module.exports = { RadioButtonPage };