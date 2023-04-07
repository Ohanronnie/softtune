import express from 'express';
import cors from 'cors';
import Home from '../controllers/home.js';
const router = express.Router();
router.use(cors())
router.post('/', Home.home);
export default router;
