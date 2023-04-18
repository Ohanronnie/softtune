import express from "express";
//import music from "../utils/multer/index.js";
import Home from '../controllers/home.js';
const router = express.Router();
router.post("/", Home.home);
export default router;
