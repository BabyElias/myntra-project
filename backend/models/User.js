const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true,
    unique: true
  },
  wardrobes: [{
    type: Schema.Types.ObjectId,
    ref: 'Wardrobe'
  }]
});

module.exports = mongoose.model('User', UserSchema);
