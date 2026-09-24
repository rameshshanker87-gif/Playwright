const { expect } = require('@playwright/test');

class ButtonsPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
   // await this.page.getByText('Buttons', { exact: true }).click();
      await this.page.getByRole('complementary').getByRole('link', { name: 'Buttons', exact: true }).click();
  }

  async doubleClick() {
    await this.page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  }

  async rightClick() {
    await this.page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  }

  async dynamicClick() {
    await this.page.getByRole('button', { name: 'Click Me', exact: true  }).click();
  }

  async verifyMessages() {
    await expect(this.page.getByText('You have done a double click')).toBeVisible();
    await expect(this.page.getByText('You have done a right click')).toBeVisible();
    await expect(this.page.getByText('You have done a dynamic click-intentional failure')).toBeVisible();
  }
}
module.exports = { ButtonsPage };