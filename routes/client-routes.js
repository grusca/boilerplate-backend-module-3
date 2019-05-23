// routes/client-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const Client = require('../models/client-model')



// POST '/clients' ---- To Create New Clients 

router.post('/clients', (req, res) => {
    const { firstname, lastname, email, phonenumber, address } = req.body;

Client.create({ firstname, lastname, email, phonenumber, address, jobs: [] })
    .then((response) => {
        res
        .status(201)
        .json(response)
    })
    .catch( (err) => {
        res
        .status(500)
        .json(err)
    })
});



// GET '/clients' ---- To Show All Clients

router.get('/clients', (req, res, next) => {
    Clients.find().populate('jobs')
        .then(allTheClients => {
            res.json(allTheClients)
        })
        .catch(err => {
            res.json(err)
        })
});



// GET '/clients:id' ---- To Search Client By Id

router.get('/clients:id', (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res
          .status(400)  //  Bad Request
          .json({ message: 'Invalid id provided'})
        return;
    }
    
    Client.findById( id ).populate('jobs')
    .then( (foundClient) => {
        res.status(200).json(foundClient);
    })
    .catch((err) => {
        res.status(500).json(err);
    })
});



// PUT '/clients/:id' ---- To Update Specific Client

router.put('/clients:id', (req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res
          .status(400)  //  Bad Request
          .json({ message: 'Invalid id provided'})
        return;
    }

    Client.findByIdAndUpdate(id, req.body)
    .then(client => {
        res
        .redirect('/clients:id')
        .status(201)
        .json({ message: `Client ${id} has been updated!` });
    })
    .catch(err => {
      res.json(err);
    })
});



// DELETE '/clients/:id' ---- To Delete Specific Client

router.delete('/client:id', (req, res, next) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res
          .status(400)  //  Bad Request
          .json({ message: 'Invalid id provided'})
        return;
    }

    Client.findByIdAndDelete(id)
        .then(() => {
            res
            .status(202)  //  Accepted
            .json({ message: `Client ${id} has been deleted!` });
        })
        .catch( err => {
            res
            .status(500)
            .json(err);
        })

})

module.exports = router;