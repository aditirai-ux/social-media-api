import { Router } from 'express';
const router = Router();

import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction } from '../../controllers/thoughtController.js';

//GET all thoughts
// /api/thoughts
router.route('/').get(getThoughts)


// GET a single thought by its id
// /api/thoughts/:thoughId
router.route('/:thoughId').get(getSingleThought);

// POST a new thought
// /api/thoughts
router.route('/').post(createThought);

// PUT to update a thought by its id
// /api/thoughts/:thoughtId
router.route('/:thoughtId').put(updateThought);

// DELETE a user by its id
// /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);

// POST to add a new reaction to a thought
// /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

// /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

export default router;
