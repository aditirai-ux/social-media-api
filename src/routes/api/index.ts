import { Router } from 'express';
import { thoughtsRouter } from './thoughtRoutes.js';
import { userRouter } from './userRoutes.js';

const router = Router();

router.use('/thoughts', thoughtsRouter);
router.use('/users', userRouter);

export default router;