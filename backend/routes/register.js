const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../modal/User"); 
const jwt = require("jsonwebtoken");

const router = express.Router();


router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

   
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, "sucess", {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully.", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
});
router.get("/", async (req, res) => {
  try {
      const data1 = await User.find(); // Fetch all products from the database
      res.status(200).send(data1); // Send the products in the response
  } catch (err) {
      console.log(err);
      res.status(500).send({ error: 'Error fetching products', details: err.message }); // Send a meaningful error response
  }
});

module.exports = router;
