const { expect } = require('@playwright/test');

class BrowserWindowsPage {
  constructor(page) {
    this.page = page;
    this.newTab = page.getByRole('button', { name: 'New Tab' });
    this.newWindow = page.getByRole('button', { name: 'New Window' });
  }

  async open() {
    //await this.page.getByText('Browser Windows', { exact: true }).click();
      await this.page.getByRole('complementary').getByRole('link', { name: 'Browser Windows', exact: true }).click();

  }

  async verifyNewTab() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.newTab.click();
    const popup = await popupPromise;
    await popup.waitForLoadState();
    await expect(popup).toHaveTitle(/Automation|Practice|XQA/i);
    await popup.close();
  }

  async verifyNewWindow() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.newWindow.click();
    const popup = await popupPromise;
    await popup.waitForLoadState();
    
    // Verifies the window has the expected Title and closes it
    await expect(popup).toHaveTitle(/Automation|Practice|XQA/i);
    await popup.close();
  }

}
module.exports = { BrowserWindowsPage };