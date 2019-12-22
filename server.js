const getSolution = require("./modules/solution/generate-solution");

async function test() {
  var solution = await getSolution(
    "Perilous sea dog? Run all over the place!",
    9
  );

  console.log(solution);
}

test();
