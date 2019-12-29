const getSolution = require("./modules/solution/generate-solution");

async function driver(clue, length) {
  var solution = await getSolution(clue, length);
  console.log(solution);
}

driver(
  "At first, actor needing new identity emulates orphan in musical theatre",
  5
);
