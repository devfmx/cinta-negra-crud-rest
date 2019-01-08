const express = require("express");
const { SignUp,LogIn } = require("../controllers/Auth");
const router = express.Router();



router.post("/signup", SignUp);
router.post("/login", LogIn);


module.exports =  router;