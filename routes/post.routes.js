import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletePost,
  getPosts,
  getUserPosts,
  updatepost,
} from "../controllers/post.controller.js";
router.post("/create", verifyToken, create);
router.get("/getposts", getPosts);
router.get("/getposts/:userId", getUserPosts);
router.delete("/deletePost/:postId/:userId", verifyToken, deletePost);
router.put("/updatepost/:postId", verifyToken, updatepost);

export default router;
