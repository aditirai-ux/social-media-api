import { Request, Response } from 'express';
import { User, Thought } from '../models/index.js';

// Get all thoughts
export const getThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughtData = await Thought.find({});
        res.json(thoughtData);
    } catch (err) {
        res.status(400).json(err);
    }
} 
// Get single thought by _id
export const getSingleThought = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
        const thoughtData = await Thought.findById(thoughtId)
        .populate({path: 'reactions', select: '-__v'});
        if (!thoughtData) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }  
        res.json(thoughtData);  
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}
// Create a thought
export const createThought = async (req: Request, res: Response) => {
    try {
        const thoughtData = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thoughtData._id } },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'Thought created but no user found with this id!' });
            return;
        } else {
            res.json('Created the thought 🎉');
            return;
        }
    } catch (err) {
        res.status(400).json(err);
    }
}
// Update thought by _id
export const updateThought = async (req: Request, res: Response) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!thoughtData) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thoughtData);
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}
// Delete thought by _id
export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thoughtData = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thoughtData) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
// Look for users associated with the thought and remove the thought from their `thoughts` array
        // const user = await User.findOneAndUpdate(
        //     { thoughts: req.params.thoughtId },
        //     { $pull: { thoughts: req.params.thoughtId } },
        //     { new: true }
        // );
        // if (!user) {
        //     return res.status(404).json({ message: 'Thought deleted but no user found with this thought!' });
        // }

        res.json({ message: 'Thought deleted!' });
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}
// Add a reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true, runValidators: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json(thought);
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}
// Remove a reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { new: true, runValidators: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No thought found with this id!' });
        }
        res.json({ message: 'Reaction deleted!' });
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}