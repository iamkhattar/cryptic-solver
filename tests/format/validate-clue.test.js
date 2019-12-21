const validateClue = require("../../modules/format/validate-clue");

test("Empty Test", () => {
  expect(validateClue("")).toEqual("");
});

test("Lowercase Test", () => {
  expect(validateClue("Dry in the Kalahari Desert")).toEqual(
    "dry in the kalahari desert"
  );
});

test("Invalid Character Removal Test", () => {
  expect(validateClue("Dry in the Kalahari //@@Desert")).toEqual(
    "dry in the kalahari desert"
  );
});

test("Hyphenated Word Test", () => {
  expect(validateClue("Dry in the Kalahari-Desert")).toEqual(
    "dry in the kalahari-desert"
  );
});
