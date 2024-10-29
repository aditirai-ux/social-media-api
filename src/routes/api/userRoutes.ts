import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, updateUser, deleteUser } from '../../controllers/userController.js';

// GET all users
// /api/users
router.route('/').get(getUsers).post(createUser);

// GET a single user by its id
// /api/users/:userId
router.route('/:userId').get(getSingleUser);

// POST a new user
// /api/users
router.route('/').post(createUser);

// PUT to update a user by its id
// /api/users/:userId
router.route('/:userId').put(updateUser);

// DELETE a user by its id
// /api/users/:userId
router.route('/:userId').delete(deleteUser);

export default router;