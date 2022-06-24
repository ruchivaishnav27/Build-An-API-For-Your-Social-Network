const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById
} = require('../controllers/user-controller');

router
  .route('/:id')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
