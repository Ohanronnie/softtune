import express from "express";
import Home from "../controllers/home.js";
import upload from '../utils/multer/index.js';
import Upload from '../controllers/Upload.js'
const router = express.Router();
router.post("/", upload.fields([{name: "audio",maxCount: 1},{name: "image",maxCount: 1}]),Upload.song)
export default router;
