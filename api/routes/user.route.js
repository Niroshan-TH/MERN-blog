import express from 'express';
import { pakaya } from '../controllers/user.controller.js';

const router =express.Router();
router.get('/test',pakaya);

export default router;