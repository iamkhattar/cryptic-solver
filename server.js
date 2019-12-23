const getSolution = require("./modules/solution/generate-solution");

async function test() {
  var solution = await getSolution(
    "Mad dog becomes an something to worship",
    3
  );

  console.log(solution);
}

test();
