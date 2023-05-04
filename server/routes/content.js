import express from "express";
import Content from "../controllers/Discover.js";
const router = express.Router();
router.post("/", Content.getContent);
export default router;
