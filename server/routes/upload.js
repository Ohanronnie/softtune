import express from "express";
import cors from "cors";
import Home from "../controllers/home.js";
const router = express.Router();
router.post("/", Home.home);
export default router;
