const { expect } = require('@playwright/test');

class FramesPage {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('#frame1');
  }

  async open() {
   // await this.page.getByText('Frames', { exact: true }).click();
      await this.page.getByRole('complementary').getByRole('link', { name: 'Frames', exact: true }).click();

  }

  async verifyFrame() {
    await expect(this.frame.locator('body')).toContainText('This is a sample page');
  }
}
module.exports = { FramesPage };