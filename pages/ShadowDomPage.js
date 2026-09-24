const { expect } = require('@playwright/test');

class ShadowDomPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    //await this.page.getByText('Shadow DOM', { exact: true }).click();
      await this.page.getByRole('complementary').getByRole('link', { name: 'Shadow DOM', exact: true }).click();

  }

  async verifyShadowContent() {
  const shadowInnerContent = this.page.getByRole('heading', { name: 'I am inside a Shadow DOM', exact: true });
  await expect(shadowInnerContent).toBeVisible();
  }
}
module.exports = { ShadowDomPage };