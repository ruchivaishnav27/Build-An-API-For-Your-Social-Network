const { Schema, model } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      //
      //
    },
    reactionBody: {
        type: String,
        required: true,
        //
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
       type: Date,
       //
       //
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

ReactionSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;