const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createNewThoughts,
  updateThoguhtsById,
  deleteThoughtsById
} = require('../controllers/thoughts-controller');

router
  .route('/:id')
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;