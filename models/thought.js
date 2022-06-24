const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    thoughtText: {
      type: String,
      required: true,
      //
    },
    createdAt: {
        type: Date,
        //
        //
    },
    username: {
        type: String,
        required: true,
    },
    reactions: {
       //
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;