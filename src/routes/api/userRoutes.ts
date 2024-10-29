import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } from '../../controllers/userController.js';

// GET all users
// /api/users
router.route('/').get(getUsers);

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

// POST to add a new friend to a user's friend list
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// DELETE to remove a friend from a user's friend list
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

export default router;