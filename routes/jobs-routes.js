// routes/jobs-routes.js
const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Client = require('../models/client-model');
const Job = require('../models/job-model');



// POST '/api/jobs' ---- Create New Job

router.post('/jobs', (req, res, next) => {
        const { title, description, progress, clientID } = req.body;
      
    Job.create({
        title: title,
        description: description,  
        progress: progress, 
        client: clientID,
        keycode: Math.random().toString(36).substring(7),
    })
        .then((newJobDocument) => {
    
        Client.findByIdAndUpdate( clientID, { $push:{ jobs: newJobDocument._id } })
            .then((theResponse) => {
            res.status(201).json(theResponse);
            })
            .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
});



// GET '/api/clients/:clientId/jobs/:jobId' ---- Retrieve Specific Job
router.get('/clients/:clientId/jobs/:jobId', (req, res) => {
  
    Job.findById(req.params.jobId)
    .then((foundJob) =>{
        res.json(foundJob);
    })
    .catch( err => res.status(500).json(err))
  });



// PUT '/api/jobs/:id' ---- Update Specific Job
router.put('/jobs/:id', (req, res, next) => {
    const { id } = req.params;
    
    if ( !mongoose.Types.ObjectId.isValid(id) ) {
      res
      .status(400)
      .json({ message: 'Invalid id provided' });
      return;
    }
  
    Job.findByIdAndUpdate(id, req.body)
      .then(() => {
        res
          .redirect('/jobs:id')
          .status(201)
          .json({ message: `Job ${id} has been updated!` });
      })
      .catch(err => res.json(err))
  });



  // DELETE '/api/tasks/:id'     => to delete a specific task
router.delete('/jobs/:id', (req, res) => {
    const { id } = req.params;
  
    if ( !mongoose.Types.ObjectId.isValid(id) ) {
      res
        .status(400)
        .json({ message: 'Specified id is not valid'});
      return;
    }
  
    Job.findByIdAndDelete(id)
      .then(() => {
        res
          .status(202)
          .json({ message: `Job ${id} has been deleted!` });
      })
      .catch(err => res.json(err))
  })

module.exports = router;
