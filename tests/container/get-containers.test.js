const getContainers = require("../../modules/container/get-containers");

/**
 * Test to check expected value when abc and def is provided
 */
test("abc def Test", () => {
  var result = getContainers("abc", "def");

  expect(result).toContain("abcdef");
  expect(result).toContain("abdefc");
  expect(result).toContain("adefbc");
  expect(result).toContain("defabc");
  expect(result).toContain("deabcf");
  expect(result).toContain("dabcef");
});
