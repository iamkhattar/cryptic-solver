const getSolution = require("./modules/solution/generate-solution");

async function driver(clue, length) {
  console.time("time");
  var solution = await getSolution(clue, length).catch(err => {
    console.log("Server Error");
    console.error(err);
    process.exit();
  });
  console.log(solution);
  //var json = getJSON(solution);
  console.timeEnd("time");
}

function getJSON(solution) {
  var arr = new Array();
  solution.forEach(currentSolution => {
    const currentObject = {
      solution: currentSolution.solution,
      reason: currentSolution.reason,
      percentage: currentSolution.percentage
    };
    arr.push(currentObject);
  });
  var json = JSON.stringify(arr);
  return json;
}

driver("Physician brings fish round", 3);
