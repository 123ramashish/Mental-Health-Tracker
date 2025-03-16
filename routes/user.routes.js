import {
  test,
  signout,
  sendOtpToEmail,
  verifyOtp,
  updatePassword,
  contact,
} from "../controllers/user.controller.js";
import express from "express";

const router = express.Router();

router.get("/test", test);
router.post("/signout", signout);
router.put('/forgotpassword', sendOtpToEmail);
router.patch('/forgotpassword', verifyOtp);
router.put('/updatepassword', updatePassword);
router.post('/contact', contact);
export default router;
