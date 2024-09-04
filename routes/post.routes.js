import express from "express";
const router = express.Router();
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletePost,
  getPosts,
  updatepost,
} from "../controllers/post.controller.js";
router.post("/create", verifyToken, create);
router.get("/getPosts", getPosts);
router.delete("/deletePost/:postId/:userId", verifyToken, deletePost);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

export default router;
