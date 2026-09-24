const { expect } = require('@playwright/test');

class AlertsPage {
  constructor(page) {
    this.page = page;
   // this.alertButton = page.locator('#alertBtn');
    // this.alertButton = page.getByRole('main').getByRole('button', { name: 'Click Me', exact: true }).first();
    this.alertButton = page.locator('#alertButton, #alertBtn, button:has-text("see alert")').first();
  }

  async open() {
    //await this.page.getByText('Alerts', { exact: true }).click();
    await this.page.getByRole('complementary').getByRole('link', { name: 'Alerts', exact: true }).click();

  }

  async verifyAlert() {
    this.page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toContain('You clicked a button');
      await dialog.accept();
    });
    await this.alertButton.click();
  }
}
module.exports = { AlertsPage };