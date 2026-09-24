const { test } = require('../fixtures/baseFixture');

test('Elements - Web Tables Search and Delete @regression', async ({ common, webTables }) => {
  await common.openPractice();
  await webTables.open();

  // Step 1: Verify the default entry 'Cierra' exists in the grid layout
  await test.step('Verify Target Initial Presence', async () => {
    await webTables.verifyRecordVisibility('Cierra', true);
  });

  // Step 2: Use the search box component to filter for 'Cierra'
  await test.step('Search Filter Action', async () => {
    await webTables.searchRecord('Cierra');
    await webTables.verifyRecordVisibility('Cierra', true);
    // confirm other records like 'Alden' are correctly hidden by the search
    await webTables.verifyRecordVisibility('Alden', false);
  });

  // Step 3: Trigger the row deletion hook
  await test.step('Delete Record Action', async () => {
    await webTables.deleteFirstRowRecord();
  });

  // Step 4: Clear the search layout and verify 'Cierra' is permanently removed
  await test.step('Verify Complete Row Eviction', async () => {
    await webTables.searchRecord(''); // Clear filter to reset the grid
    await webTables.verifyRecordVisibility('Cierra', false);
    await webTables.verifyRecordVisibility('Alden', true); // Confirm other rows remain unaffected
  });
});
