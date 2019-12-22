const getSolution = require("./modules/solution/generate-solution");

async function test() {
  var solution = await getSolution("Ms Reagan is upset by the executives", 8);

  //console.log(solution);
}

test();
