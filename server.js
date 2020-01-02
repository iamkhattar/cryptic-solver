const getSolution = require("./modules/solution/generate-solution");

async function driver(clue, length) {
  console.time("time");
  var solution = await getSolution(clue, length).catch(err => {
    console.log("Server Error");
    process.exit();
  });
  console.log(solution);
  console.timeEnd("time");
}

driver("Agree with the backward academic fellow", 3);
