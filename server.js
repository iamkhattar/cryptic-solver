const getSolution = require("./modules/solution/generate-solution");

async function test() {
  var solution = await getSolution("Succession of command", 5);
  console.log(solution);
}

test();
