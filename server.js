const getSolution = require("./modules/solution/generate-solution");

async function test() {
  var solution = await getSolution("Clear as a document", 8);

  console.log(solution);
}

test();
