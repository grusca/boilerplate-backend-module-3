const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  phonenumber: String,
  address: {
    number: String,
    street: String,
    city: String,
    country: String,
  },
  jobs: [{type: Schema.Types.ObjectId, ref: 'Job'}],
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
  },
});

const Client = mongoose.model('Client', clientSchema);
 
module.exports = Client;