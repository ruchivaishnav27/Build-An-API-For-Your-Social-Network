const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createNewThought,
  updateThoguhtById,
  deleteThoughtById
} = require('../../controllers/thought-controller');

// /api/pizzas/:id
router
  .route('/:id')
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;