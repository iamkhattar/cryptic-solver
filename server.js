const getSolution = require("./modules/solution/generate-solution");

async function driver(clue, length) {
  var solution = await getSolution(clue, length);
  console.log(solution);
}

driver("Mad dog becomes an something to worship", 3);
