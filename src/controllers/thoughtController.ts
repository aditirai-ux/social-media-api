import { Request, Response } from 'express';
import { User, Thought, Reaction } from '../models/index';

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
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');
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
        res.json(thoughtData);
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
        res.json(thoughtData);
        return;
    } catch (err) {
        res.status(400).json(err);
        return;
    }
}
// Add a reaction to a thought
export const addReaction(); 
// Remove a reaction from a thought
export const removeReaction();