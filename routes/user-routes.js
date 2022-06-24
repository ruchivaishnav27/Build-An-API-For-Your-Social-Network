const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById
} = require('../../controllers/user-controller');

router
  .route('/:id')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
