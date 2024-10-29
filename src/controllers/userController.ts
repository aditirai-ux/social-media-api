import { Request, Response } from 'express';
import { User, Thought } from '../models/index';

// Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const userData = await User.find({});
        res.json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
}
// Get single user by _id
export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userData = await User.findOne({ _id: req.params.userId });
        res.json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
}
// Create a user
export const createUser();
// Update user by _id
export const updateUser();
// Delete user by _id
export const deleteUser();
// Add a friend to a user's friend list using friendID
export const addFriend(); 
// Remove a friend from a user's friend list using friendID
export const removeFriend();