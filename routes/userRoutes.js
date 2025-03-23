const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser); // Register user
router.post("/login", loginUser); // Login user & get token
router.get("/test", (req, res) => {
  res.send("User routes are working!");
});
module.exports = router;
