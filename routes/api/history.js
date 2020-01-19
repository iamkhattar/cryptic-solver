const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

/**
 * @route   POST api/history
 * @desc    Add to History
 * @access  Private
 */
router.post(
  "/",
  [
    auth,
    [
      check("clue", "Please include a clue")
        .not()
        .isEmpty(),
      check("length", "Length must be a number").isNumeric()
    ]
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const user = await User.findById(req.user.id);
      const newClue = { clue: req.body.clue, length: req.body.length };
      user.history.unshift(newClue);
      await user.save();
      return res.json(user.history);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
