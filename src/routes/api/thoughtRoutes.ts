import { Router } from 'express';
const router = Router();

import { getThoughts, getSingleThought, createThought, updateThought, deleteThought, addTag, removeTag } from '../../controllers/appController.js';

//GET all thoughts
// /api/thoughts
router.route('/').get(getThoughts)


// GET a single thought by its id
// /api/users/:thoughId
router.route('/:thoughId').get(getSingleThought);

// POST a new user
// /api/users
router.route('/').post(createUser);

// PUT to update a user by its id
// /api/users/:userId
router.route('/:userId').put(updateUser);

// DELETE a user by its id
// /api/users/:userId
router.route('/:userId').delete(deleteUser);


router.route('/').post(createThought);

// /api/applications/:applicationId
router
  .route('/:applicationId')
  .get(getSingleApplication)
  .put(updateApplication)
  .delete(deleteApplication);

// /api/applications/:applicationId/tags
router.route('/:applicationId/tags').post(addTag);

// /api/applications/:applicationId/tags/:tagId
router.route('/:applicationId/tags/:tagId').delete(removeTag);

export default router;
