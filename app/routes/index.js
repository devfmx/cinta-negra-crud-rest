const express = require("express");
const { SignUp, LogIn } = require("../controllers/Auth");
const { getUsers, getUser, updateUser, deleteUser, me, updateMe } = require("../controllers/Users");

const { createPosts, getPosts, getOnePost, updatePost, deletePost } = require("../controllers/Posts");

const isAuthenticated = require("../middlewares/isAuthenticated");

const router = express.Router();



router.post("/signup", SignUp);
router.post("/login", LogIn);

router.get("/users", isAuthenticated, getUsers);
router.get("/users/:id", isAuthenticated, getUser);
router.patch("/users/:id", isAuthenticated, updateUser);
router.delete("/users/:id", isAuthenticated, deleteUser);


router.get("/me", isAuthenticated, me);
router.patch("/me", isAuthenticated, updateMe);


router.post("/posts", isAuthenticated, createPosts);
router.get("/posts", isAuthenticated, getPosts);
router.get("/posts/:id", isAuthenticated, getOnePost);
router.patch("/posts/:id", isAuthenticated, updatePost);
router.delete("/posts/:id", isAuthenticated, deletePost);



module.exports = router;