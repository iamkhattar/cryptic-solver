const getSolution = require("./modules/solution/generate-solution");

async function test() {
  var solution = await getSolution("Chaperone shredded corsets", 7);

  console.log(solution);
}

test();
