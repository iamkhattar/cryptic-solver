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

driver(
  "At first, actor needing new identity emulates orphan in musical theatre",
  5
);
