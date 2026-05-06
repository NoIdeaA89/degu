import { Router } from 'express';
import { login } from '../controllers/auth.controller';

const router = Router();

// Endpoint: POST http://localhost:3000/api/auth/login
router.post('/login', login);

export default router;