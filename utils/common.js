const { expect } = require('@playwright/test');

class CommonActions {
  constructor(page) {
    this.page = page;
  }

  async openPractice() {
    await this.page.goto('/practice');
    await expect(this.page).toHaveURL(/xqa\.io\/practice/);
  }

  async takeScreenshot(name) {
    await this.page.screenshot({
      path: `test-results/manual-${name}.png`,
      fullPage: true
    });
  }
}

module.exports = { CommonActions };