const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstname: {
    type: String,
    required: "Name is required"
  },
  lastname: String,
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
    City: String,
    Country: String,
  },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Client = mongoose.model('Client', clientSchema);
 
module.exports = Client;