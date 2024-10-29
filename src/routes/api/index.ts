import { Router } from 'express';
const router = Router();
import thoughtRoutes from './thoughtRoutes';
import userRoutes from './userRoutes';

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

export default router;