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
    type: String
  }]
});

module.exports = mongoose.model('User', UserSchema);
//ek id pehle se
//ab uss id k wardrobe mein product add kardo
