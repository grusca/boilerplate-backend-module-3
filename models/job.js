const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobname: {
    type: String,
    required: "Job name is required"
  },
  jobdescription: String,
  status: {
    type: Number,
    max: 5,
  },
  price: Number,
  amountpaid: Nunmber,
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Job = mongoose.model('Job', jobSchema);
 
module.exports = Job;