const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const getSolution = require("../../modules/solution/generate-solution");

/**
 * @route   POST /api/solve
 * @desc    Get solution for a cryptic clue
 * @access  Public
 */
router.post(
  "/",
  [
    check("clue", "Please include a clue")
      .not()
      .isEmpty(),
    check("length", "Length must be a number").isNumeric()
  ],
  async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { clue, length } = req.body;
    try {
      var solution = await getSolution(clue, length);
      var js = getJSON(solution);
      return res.json(js);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

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
  return arr;
}

module.exports = router;
