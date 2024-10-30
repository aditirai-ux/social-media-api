import { Router } from 'express';
const router = Router();

import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, removeReaction } from '../../controllers/thoughtController.js';

//GET all thoughts
// POST a new thought
// /api/thoughts
router.route('/').get(getThoughts).post(createThought);


// GET a single thought by its id
// PUT to update a thought by its id
// DELETE a user by its id
// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);


// POST to add a new reaction to a thought
// /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

// /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

export { router as thoughtsRouter };
