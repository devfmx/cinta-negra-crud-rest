const express = require("express");
const { SignUp, LogIn } = require("../controllers/Auth");
const { getUsers,getUser,updateUser, deleteUser } = require("../controllers/Users");
const router = express.Router();



router.post("/signup", SignUp);
router.post("/login", LogIn);

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.patch("/users/:id",updateUser);

router.delete("/users/:id", deleteUser);


module.exports = router;