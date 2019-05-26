const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phonenumber: {
    type: String,
  },
  address: {
    number: String,
    street: String,
    city: String,
    country: String,
  },
  company: String,
  businessdescription: String,
  image: String,
  clients: [{type: Schema.Types.ObjectId, ref: 'Client'}],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;