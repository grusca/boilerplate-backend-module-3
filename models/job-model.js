const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: String,
  description: String,
  keycode: String,
  progress: {
    type: Number,
    max: 5,
  },
  price: Number,
  amountpaid: Number,
  image: String,
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Job = mongoose.model('Job', jobSchema);
 
module.exports = Job;