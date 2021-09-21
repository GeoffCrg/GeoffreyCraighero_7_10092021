const express = require("express");

const router = express.Router();

const postCtrl = require("../controllers/post");

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, postCtrl.createPost); 
router.get("/", auth, multer, postCtrl.getAllPost); 
router.delete("/:id", auth, multer, postCtrl.deletePost); 

module.exports = router;
