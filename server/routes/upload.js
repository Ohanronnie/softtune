import express from "express";
import cors from "cors";
import Home from "../controllers/home.js";
import upload from '../utils/multer/index.js';
const router = express.Router();
router.post("/", upload.fields([{name: "audio",maxCount: 1},{name: "image",maxCount: 1}]),function(req,res){
  console.log(req)
});
export default router;
