const getSolution = require("./modules/solution/generate-solution");

async function driver(clue, length) {
  var solution = await getSolution(clue, length);
  console.log(solution);
}

driver("Unusually tough monster", 5);
