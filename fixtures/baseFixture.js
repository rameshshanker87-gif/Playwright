const { test: base, expect } = require('@playwright/test');
const { CommonActions } = require('../utils/common');
const { TextBoxPage } = require('../pages/TextBoxPage');
const { CheckBoxPage } = require('../pages/CheckBoxPage');
const { RadioButtonPage } = require('../pages/RadioButtonPage');
const { WebTablesPage } = require('../pages/WebTablesPage');
const { ButtonsPage } = require('../pages/ButtonsPage');
const { DynamicPropertiesPage } = require('../pages/DynamicPropertiesPage');
const { ShadowDomPage } = require('../pages/ShadowDomPage');
const { PracticeFormPage } = require('../pages/PracticeFormPage');
const { BrowserWindowsPage } = require('../pages/BrowserWindowsPage');
const { AlertsPage } = require('../pages/AlertsPage');
const { FramesPage } = require('../pages/FramesPage');

const test = base.extend({
  common: async ({ page }, use) => use(new CommonActions(page)),
  textBox: async ({ page }, use) => use(new TextBoxPage(page)),
  checkBox: async ({ page }, use) => use(new CheckBoxPage(page)),
  radioButton: async ({ page }, use) => use(new RadioButtonPage(page)),
  webTables: async ({ page }, use) => use(new WebTablesPage(page)),
  buttons: async ({ page }, use) => use(new ButtonsPage(page)),
  dynamicProperties: async ({ page }, use) => use(new DynamicPropertiesPage(page)),
  shadowDom: async ({ page }, use) => use(new ShadowDomPage(page)),
  practiceForm: async ({ page }, use) => use(new PracticeFormPage(page)),
  browserWindows: async ({ page }, use) => use(new BrowserWindowsPage(page)),
  alerts: async ({ page }, use) => use(new AlertsPage(page)),
  frames: async ({ page }, use) => use(new FramesPage(page))
});

module.exports = { test, expect };