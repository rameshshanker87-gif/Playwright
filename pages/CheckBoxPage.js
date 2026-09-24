const { expect } = require('@playwright/test');

class CheckBoxPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
   // await this.page.getByText('Check Box', { exact: true }).click();
   await this.page.getByRole('complementary').getByRole('link', { name: 'Check Box', exact: true }).click();

  }

  async expandHome() {
    // const home = this.page.getByText('Home', { exact: true }).first();
    // await home.click();

    await this.page.locator('.lucide-chevron-right').first().click();
    await this.page.waitForTimeout(300)
  }

  async selectDesktop() {
    const desktop = this.page.getByText('Desktop', { exact: true });
    await desktop.click();
  }

  async verifySelection(text) {

    const resultText = this.page.getByText(text).first();
    await expect(resultText).toBeVisible();
    await expect(resultText).toContainText(text);

  }
}
module.exports = { CheckBoxPage };