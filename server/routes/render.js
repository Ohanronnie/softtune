import express from "express";
import Render from "../controllers/Render.js";
const router = express.Router();
router.get("/music/:id", Render.music);
router.get("/image/:id", Render.image);
export default router;
