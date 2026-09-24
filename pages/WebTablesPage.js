const { expect } = require('@playwright/test');

class WebTablesPage {
  constructor(page) {
    this.page = page;
    
    // Exact Target IDs provided by the XQA helper section
    this.searchBox = page.locator('#searchBox');
    this.deleteFirstRowButton = page.locator('#delete-record-1');
  }

  async open() {
    // Scopes to the sidebar menu container to avoid generic string selection issues
    await this.page.getByRole('complementary').getByRole('link', { name: 'Web Tables', exact: true }).click();
  }

  async searchRecord(query) {
    await this.searchBox.fill(query);
    // Give the table UI a brief moment to finish rendering the filtered layout rows
    await this.page.waitForTimeout(500); 
  }

  async deleteFirstRowRecord() {
    await this.deleteFirstRowButton.click();
    await this.page.waitForTimeout(500);
  }

  async verifyRecordVisibility(name, shouldBeVisible = true) {
    const tableRecord = this.page.getByRole('row').getByText(name, { exact: true });
    if (shouldBeVisible) {
      await expect(tableRecord).toBeVisible();
    } else {
      await expect(tableRecord).not.toBeVisible();
    }
  }
}

module.exports = { WebTablesPage };


