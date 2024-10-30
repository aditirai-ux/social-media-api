import { Request, Response } from 'express';
import { User, Thought } from '../models/index.js';

// Get all users
export const getUsers = async (_req: Request, res: Response) => {
    try {
        const userData = await User.find({});
        res.json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
}

// GET a single user by its _id and populated thought and friend data
export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userData = await User.findOne({ _id: req.params.userId })
        .populate({ path: 'Thought', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' })
        
        if (!userData) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }  
        res.json(userData);
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}

// export const getSingleUser = async (req: Request, res: Response) => {
//     try {
//         const userData = await User.findOne({ _id: req.params.userId })
//         .select('-__v');
//         if (!userData) {
//             return res.status(404).json({ message: 'No user found with this id!' });
//         }  
//         res.json(userData);
//         return;
//     } catch (err) {
//         res.status(400).json(err);
//         return;
//     }
// }
// Create a user
export const createUser = async (req: Request, res: Response) => {
    try {
        const userData = await User.create(req.body);
        res.json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
}
// Update user by _id
export const updateUser = async (req: Request, res: Response) => {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!userData) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(userData);
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}
// Delete user by _id and associated thoughts
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userData = await User.findOneAndDelete({ _id: req.params.userId });
        if (!userData) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        await Thought.deleteMany({ _id: { $in: userData.thoughts } });
        res.json({ message: 'User and associated thoughts deleted!' });
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}
// Add a friend to a user's friend list using friendID
export const addFriend = async (req: Request, res: Response) => {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true, runValidators: true }
        );
        if (!userData) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json(userData);
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
} 
// Remove a friend from a user's friend list using friendID
export const removeFriend = async (req: Request, res: Response) => {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true, runValidators: true }
        );
        if (!userData) {
            return res.status(404).json({ message: 'No user found with this id!' });
        }
        res.json({ message: 'Friend deleted!' });
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}