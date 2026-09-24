const { expect } = require('@playwright/test');

class DynamicPropertiesPage {
  constructor(page) {
    this.page = page;
    this.enableButton = page.getByRole('button', { name: 'Enabled' });
    this.colorButton = page.getByRole('button', { name: 'Color Change' });
  }

  async open() {
    //await this.page.getByText('Dynamic Properties', { exact: true }).click();
    await this.page.getByRole('complementary').getByRole('link', { name: 'Dynamic Properties', exact: true }).click();
  }

  async verifyDynamicButton() {
    await expect(this.enableButton).toBeEnabled({ timeout: 10000 });
  }

  async verifyColorButton() {
    await expect(this.colorButton).toBeVisible();
  }
}
module.exports = { DynamicPropertiesPage };