import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } from '../../controllers/userController.js';

// GET all users
// POST a new user
// /api/users
router.route('/').get(getUsers).post(createUser);

// GET a single user by its id
// PUT to update a user by its id
// DELETE a user by its id
// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


// POST to add a new friend to a user's friend list
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// DELETE to remove a friend from a user's friend list
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

export { router as userRouter };