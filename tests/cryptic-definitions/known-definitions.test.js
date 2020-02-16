const getKnownDefinitions = require("../../modules/cryptic-definitions/known-definitions");

/**
 * Test to check if smart gives brainbox
 */
test("smart: brainbox Test", () => {
  const definitions = getKnownDefinitions("smart");
  expect(definitions).toContain("brainbox");
});

/**
 * Test to check if smarty gives false
 */
test("smarty: false Test", () => {
  const definitions = getKnownDefinitions("smarty");
  expect(definitions).toBeFalsy();
});
