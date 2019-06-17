// routes/client-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const Client = require('../models/client-model');
const User = require('../models/user-model');


// GET '/api/clients' ---- To Show Clients

router.get('/clients/:userId', (req, res, next) => {
  const {userId} = req.params
  Client.find({user: userId})
    .then( allClients => res.json(allClients) )
    .catch( err => res.json(err) )
});


// POST '/api/clients' ---- To Create New Clients 

router.post('/clients', (req, res, next) => {
  const { firstname, lastname, phonenumber, email, userID } = req.body;
  Client.create( { firstname, lastname, phonenumber, email, user: userID } )
    .then((newClientDocument) => {
      User.findByIdAndUpdate( userID, { $push:{ clients: newClientDocument._id } })
      .then(theResponse => res.status(201).json(theResponse))
      .catch(err => res.status(500).json(err))
    })
  .catch(err => res.status(500).json(err))
});



// GET '/api/clients:id' ---- To Search Client By Id

router.get('/client/:id', (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Invalid id provided'})
        return;
    }
    
    Client.findById( id ).populate('jobs')
    .then( foundClient => res.status(200).json(foundClient) )
    .catch( err => res.status(500).json(err))
});


// PUT '/api/clients/:id' ---- To Update Specific Client

router.put('/clients/:id', (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Invalid id provided'})
        return;
    }

    Client.findByIdAndUpdate(id, req.body)
    .then(() => res.json({ message: `Client ${id} has been updated!` }))
    .catch( err => res.json(err) )
});


// DELETE '/api/clients/:id' ---- To Delete Specific Client

router.delete('/clients/:id', (req, res, next) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Invalid id provided'})
        return;
    }

    Client.findByIdAndDelete(id)
        .then(() => res.status(202).json({ message: `Client ${id} has been deleted!` } ) )
        .catch( err => res.status(500).json(err))
})

  // GET  Retrieve clients By Username
  router.get('/clients/:userID', (req, res) => {
    const { userID } = req.params;

    Job.find({userID})
    .then( foundClients => res.status(200).json(foundClients))
    .catch( err => res.status(500).json(err))
  });

module.exports = router;
