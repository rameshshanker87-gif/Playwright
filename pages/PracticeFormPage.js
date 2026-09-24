const { expect } = require('@playwright/test');

class PracticeFormPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.getByLabel('First Name');
    this.lastName = page.getByLabel('Last Name');
    this.email = page.getByLabel('Email');
    //this.mobile = page.getByLabel('Mobile Number');
    this.mobile = page.locator('input[type="tel"]');
    //this.gender = page.getByLabel('Male');
    this.gender = page.locator('input[value="Male"]');
    this.address = page.getByLabel('Current Address');
    this.submit = page.getByRole('button', { name: 'Submit' });
  }

  async open() {
    //await this.page.getByText('Practice Form', { exact: true }).click();
     await this.page.getByRole('complementary').getByRole('link', { name: 'Practice Form', exact: true }).click();


  }

  async fillForm(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.gender.check();  
    await this.mobile.fill(data.mobile);
    await this.address.fill(data.address);
  }

  async submitForm() {
    await this.submit.click();
  }

  async verifySubmission() {

   await expect(this.page.getByText('Thanks for submitting the form', { exact: true })).toBeVisible();
   //await expect(this.page.getByRole('heading', { name: 'Thanks for submitting the form' })).toBeVisible();
  
  }
}
module.exports = { PracticeFormPage };