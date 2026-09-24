# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: buttons.spec.js >> Elements - Buttons @smoke
- Location: tests\buttons.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('You have done a dynamic click-intentional failure')
Expected: visible
Timeout: 8000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('You have done a dynamic click-intentional failure') with timeout 8000ms
  - waiting for getByText('You have done a dynamic click-intentional failure')

```

```yaml
- banner:
  - link "XQA":
    - /url: /
  - navigation:
    - link "Home":
      - /url: /
    - link "About":
      - /url: /about
    - link "Blog":
      - /url: /blog
    - link "Practice":
      - /url: /practice
    - link "Learn":
      - /url: /learn
    - link "Contact":
      - /url: /contact
- complementary:
  - heading "QA Practice" [level=2]
  - paragraph: Sharpen your automation skills
  - button "Elements":
    - img
    - text: Elements
    - img
  - link "Text Box":
    - /url: /practice/text-box
    - img
    - text: Text Box
  - link "Check Box":
    - /url: /practice/check-box
    - img
    - text: Check Box
  - link "Radio Button":
    - /url: /practice/radio-button
    - img
    - text: Radio Button
  - link "Web Tables":
    - /url: /practice/web-tables
    - img
    - text: Web Tables
  - link "Buttons":
    - /url: /practice/buttons
    - img
    - text: Buttons
  - link "Dynamic Properties":
    - /url: /practice/dynamic-properties
    - img
    - text: Dynamic Properties
  - button "Advanced Level":
    - img
    - text: Advanced Level
    - img
  - link "Shadow DOM":
    - /url: /practice/shadow-dom
    - img
    - text: Shadow DOM
  - link "Shadow DOM in Iframe":
    - /url: /practice/shadow-dom-in-iframe
    - img
    - text: Shadow DOM in Iframe
  - link "Iframe in Shadow DOM":
    - /url: /practice/iframe-in-shadow-dom
    - img
    - text: Iframe in Shadow DOM
  - link "Nested Frames in Shadow DOM":
    - /url: /practice/nested-frames-in-shadow-dom
    - img
    - text: Nested Frames in Shadow DOM
  - link "Shadow DOM in Nested Frames":
    - /url: /practice/shadow-dom-in-nested-frames
    - img
    - text: Shadow DOM in Nested Frames
  - link "Spinners & Wait":
    - /url: /practice/spinners
    - img
    - text: Spinners & Wait
  - link "SVG Elements":
    - /url: /practice/svg-elements
    - img
    - text: SVG Elements
  - button "Forms":
    - img
    - text: Forms
    - img
  - link "Practice Form":
    - /url: /practice/practice-form
    - img
    - text: Practice Form
  - button "Alerts, Frame & Windows":
    - img
    - text: Alerts, Frame & Windows
    - img
  - link "Browser Windows":
    - /url: /practice/browser-windows
    - img
    - text: Browser Windows
  - link "Alerts":
    - /url: /practice/alerts
    - img
    - text: Alerts
  - link "Frames":
    - /url: /practice/frames
    - img
    - text: Frames
  - link "Nested Frames":
    - /url: /practice/nested-frames
    - img
    - text: Nested Frames
  - link "Modal Dialogs":
    - /url: /practice/modal-dialogs
    - img
    - text: Modal Dialogs
  - button "Widgets":
    - img
    - text: Widgets
    - img
  - link "Accordian":
    - /url: /practice/accordian
    - img
    - text: Accordian
  - link "Auto Complete":
    - /url: /practice/auto-complete
    - img
    - text: Auto Complete
  - link "Date Picker":
    - /url: /practice/date-picker
    - img
    - text: Date Picker
  - link "Slider":
    - /url: /practice/slider
    - img
    - text: Slider
  - link "Progress Bar":
    - /url: /practice/progress-bar
    - img
    - text: Progress Bar
  - link "Tabs":
    - /url: /practice/tabs
    - img
    - text: Tabs
  - link "Tool Tips":
    - /url: /practice/tool-tips
    - img
    - text: Tool Tips
  - link "Menu":
    - /url: /practice/menu
    - img
    - text: Menu
  - link "Select Menu":
    - /url: /practice/select-menu
    - img
    - text: Select Menu
  - button "Interactions":
    - img
    - text: Interactions
    - img
  - link "Sortable":
    - /url: /practice/sortable
    - img
    - text: Sortable
  - link "Selectable":
    - /url: /practice/selectable
    - img
    - text: Selectable
  - link "Resizable":
    - /url: /practice/resizable
    - img
    - text: Resizable
  - link "Droppable":
    - /url: /practice/droppable
    - img
    - text: Droppable
  - link "Dragabble":
    - /url: /practice/dragabble
    - img
    - text: Dragabble
  - link "File Upload":
    - /url: /practice/file-upload
    - img
    - text: File Upload
  - link "Context Menu":
    - /url: /practice/context-menu
    - img
    - text: Context Menu
  - link "Infinite Scroll":
    - /url: /practice/infinite-scroll
    - img
    - text: Infinite Scroll
  - button "Book Store Application":
    - img
    - text: Book Store Application
    - img
  - link "Login":
    - /url: /practice/login
    - img
    - text: Login
  - link "Book Store":
    - /url: /practice/books
    - img
    - text: Book Store
  - link "Profile":
    - /url: /practice/profile
    - img
    - text: Profile
  - link "Book Store API":
    - /url: /practice/book-api
    - img
    - text: Book Store API
  - button "Accessibility Testing":
    - img
    - text: Accessibility Testing
    - img
  - link "Keyboard Navigation":
    - /url: /practice/keyboard-navigation
    - img
    - text: Keyboard Navigation
  - link "Screen Reader":
    - /url: /practice/screen-reader
    - img
    - text: Screen Reader
  - link "Color Contrast":
    - /url: /practice/color-contrast
    - img
    - text: Color Contrast
  - link "Skip Links":
    - /url: /practice/skip-links
    - img
    - text: Skip Links
  - button "API Testing":
    - img
    - text: API Testing
    - img
  - link "REST API Playground":
    - /url: /practice/rest-api-playground
    - img
    - text: REST API Playground
  - link "WebSocket Testing":
    - /url: /practice/websocket-testing
    - img
    - text: WebSocket Testing
  - link "API Error Handling":
    - /url: /practice/api-error-handling
    - img
    - text: API Error Handling
  - button "Security Testing":
    - img
    - text: Security Testing
    - img
  - link "XSS Demo":
    - /url: /practice/xss-demo
    - img
    - text: XSS Demo
  - button "Performance Testing":
    - img
    - text: Performance Testing
    - img
  - link "Lazy Loading":
    - /url: /practice/lazy-loading
    - img
    - text: Lazy Loading
  - button "Mobile Testing":
    - img
    - text: Mobile Testing
    - img
  - link "Responsive Viewport":
    - /url: /practice/responsive-viewport
    - img
    - text: Responsive Viewport
  - button "Ads Testing":
    - img
    - text: Ads Testing
    - img
  - link "Simple Ads Testing":
    - /url: /practice/simple-ads-testing
    - img
    - text: Simple Ads Testing
  - link "Dynamic Ads Testing":
    - /url: /practice/dynamic-ads-testing
    - img
    - text: Dynamic Ads Testing
  - link "Responsive Ads Testing":
    - /url: /practice/responsive-ads-testing
    - img
    - text: Responsive Ads Testing
- main:
  - link "Back to Practice":
    - /url: /practice
    - img
    - text: Back to Practice
  - img
  - heading "Buttons" [level=1]
  - heading "Buttons" [level=2]
  - heading "Double Click Me" [level=3]
  - button "Double Click Me"
  - paragraph:
    - text: You have done a double click
    - link "Download Productivity Apps":
      - img
      - text: Download Productivity Apps
  - heading "Right Click Me" [level=3]
  - button "Right Click Me"
  - paragraph: You have done a right click
  - heading "Click Me" [level=3]
  - button "Click Me"
  - paragraph: You have done a dynamic click
  - img
  - heading "QA Automation Helper" [level=3]
  - button:
    - img
  - heading "Target IDs Key Element IDs" [level=4]
  - text: "#doubleClickBtn"
  - button "Copy ID":
    - img
  - text: "#rightClickBtn"
  - button "Copy ID":
    - img
  - text: "#dynamicClickBtn"
  - button "Copy ID":
    - img
  - heading "Selectors Suggested Locators" [level=4]
  - text: //button[text()='Double Click Me']
  - button:
    - img
  - text: //button[text()='Right Click Me']
  - button:
    - img
  - heading "Advance Testing Tips" [level=4]:
    - img
    - text: Advance Testing Tips
  - list:
    - listitem: "Context Menu: Testing right-click usually requires simulating a 'contextmenu' event."
    - listitem: "Double Click: Many frameworks have dedicated .dblclick() methods."
    - listitem: "Assertion: Verify the message text appears only after the specific action is performed."
- insertion:
  - text: Discover more
  - link "Optimize System Speed":
    - img
    - text: Optimize System Speed
  - link "Download Secure Browsers":
    - img
    - text: Download Secure Browsers
  - link "Download Productivity Apps":
    - img
    - text: Download Productivity Apps
  - link "Upgrade Industrial Robotics":
    - img
    - text: Upgrade Industrial Robotics
  - link "Hire Web Developers":
    - img
    - text: Hire Web Developers
  - link "Compare Developer Tools":
    - img
    - text: Compare Developer Tools
  - link "Find Ergonomic Keyboards":
    - img
    - text: Find Ergonomic Keyboards
  - link "Learn Coding Online":
    - img
    - text: Learn Coding Online
- contentinfo:
  - heading "About XQA" [level=3]
  - paragraph: XQA is your trusted platform for quality content, professional insights, and valuable resources. We are dedicated to delivering excellence and empowering our community with knowledge and expertise.
  - heading "Quick Links" [level=3]
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "About":
        - /url: /about
    - listitem:
      - link "Blog":
        - /url: /blog
    - listitem:
      - link "Contact":
        - /url: /contact
    - listitem:
      - link "Practice":
        - /url: /practice
    - listitem:
      - link "Learn":
        - /url: /learn
  - heading "Contact Info" [level=3]
  - list:
    - listitem:
      - img
      - text: contact@xqa.io
    - listitem:
      - img
      - text: +1 (555) 123-4567
    - listitem:
      - img
      - text: 123 Business Street, Suite 100, City, State 12345
  - paragraph: © 2026 xqa.io. All rights reserved.
  - link "Privacy Policy":
    - /url: /privacy
  - link "Terms of Service":
    - /url: /terms
- alert: Buttons - Automation Testing Practice | XQA
```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | 
  3  | class ButtonsPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |   }
  7  | 
  8  |   async open() {
  9  |    // await this.page.getByText('Buttons', { exact: true }).click();
  10 |       await this.page.getByRole('complementary').getByRole('link', { name: 'Buttons', exact: true }).click();
  11 |   }
  12 | 
  13 |   async doubleClick() {
  14 |     await this.page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  15 |   }
  16 | 
  17 |   async rightClick() {
  18 |     await this.page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right' });
  19 |   }
  20 | 
  21 |   async dynamicClick() {
  22 |     await this.page.getByRole('button', { name: 'Click Me', exact: true  }).click();
  23 |   }
  24 | 
  25 |   async verifyMessages() {
  26 |     await expect(this.page.getByText('You have done a double click')).toBeVisible();
  27 |     await expect(this.page.getByText('You have done a right click')).toBeVisible();
> 28 |     await expect(this.page.getByText('You have done a dynamic click-intentional failure')).toBeVisible();
     |                                                                                            ^ Error: expect(locator).toBeVisible() failed
  29 |   }
  30 | }
  31 | module.exports = { ButtonsPage };
```