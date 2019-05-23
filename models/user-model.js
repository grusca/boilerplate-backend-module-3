const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: "Username is required"
  },
  password: {
    type: String,
    required: "Password is required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      'Password should be longer'
    ]
  },
  email: {
    type: String,
    unique: true,
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
  businessname: String,
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