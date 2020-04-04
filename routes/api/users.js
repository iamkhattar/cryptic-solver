const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");

/**
 * @route   POST api/users
 * @desc    Register a User
 * @access  Public
 */
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    //Error Checking
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      //Check if the email is already registered to another User
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      //If the email isnt registered, create a user with the email and password
      user = new User({ email, password });

      //Encrypt password using Hash & Salt and update User Password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //Save User to the Database
      await user.save();

      // Generate JSON WEB TOKEN
      const payload = {
        user: {
          id: user.id,
        },
      };

      //Sign and Send JSON WEB TOKEN
      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
