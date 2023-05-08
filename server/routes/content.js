import express from "express";
import Content from "../controllers/Discover.js";
const router = express.Router();
router.post("/", Content.getContent);
router.post('/nextTrack', Content.next)
export default router;
