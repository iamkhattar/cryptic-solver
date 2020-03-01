const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Query = require("../../modules/solution/Query");

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { clue, length } = req.body;
    try {
      var query = new Query(clue, length);
      var solution = await query.solveClue();
      return res.json(solution);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
