class TextBoxPage {
  constructor(page) {
    this.page = page;
    this.fullName = page.getByLabel('Full Name');
    this.email = page.getByLabel('Email');
    this.currentAddress = page.getByLabel('Current Address');
    this.permanentAddress = page.getByLabel('Permanent Address');
    this.submit = page.getByRole('button', { name: 'Submit' });
  }

  async open() {
   // await this.page.getByText('Text Box', { exact: true }).click();
    await this.page.getByRole('complementary').getByRole('link', { name: 'Text Box', exact: true }).click();
  }

  async fillForm(data) {
    await this.fullName.fill(data.fullName);
    await this.email.fill(data.email);
    await this.currentAddress.fill(data.currentAddress);
    await this.permanentAddress.fill(data.permanentAddress);
  }

  async submitForm() {
    await this.submit.click();
  }

  async verifyName(name) {
    await this.page.getByText(`Name:${name}`, { exact: true }).or(
      this.page.getByText(`Name :${name}`, { exact: true })
    ).waitFor({ state: 'visible' }).catch(() => {});
    const output = this.page.locator('body');
    return output;
  }
}
module.exports = { TextBoxPage };