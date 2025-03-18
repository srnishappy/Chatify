import express from 'express';
import { protectRoute } from '../middleware/auth.js';

import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from '../controller/auth.js';
const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.put('/update-profile', protectRoute, updateProfile);
router.get('/check', protectRoute, checkAuth);
export default router;
