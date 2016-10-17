var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Collaborator = require('../models/Collaborator.js');


/* GET collaborators listing. */
router.get('/collabs', function(req, res, next) {
    Collaborator.find(function(err, collabs){
        if(err) return next(err);
        else res.json(collabs);    
    });
});

/*GET collaborators by ID*/
router.get('/collabs/:id', function(req, res, next) {
    Collaborator.findById(req.params.id, function(err, collab){
        if(err) return next(err);
        else res.json(collab);
    });
})

/*GET collaborators by project ID*/
router.get('/collabs/project/:id', function(req, res, next) {
    Collaborator.find({'professionalExperiences.idProject' : req.params.id}, function(err, collabs){
        if(err) return next(err);
        else res.json(collabs);
    });
})

/* POST = create a collaborator*/
router.post('/collabs', function(req, res, next){
    Collaborator.create(req.body, function(err, post){
        if(err) return next(err);
        else res.json(post);
    });
});

/* PUT : Update a collaborator*/
router.put('/collabs/:id', function(req, res, next){
    Collaborator.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        else res.json(post);
    });
});

/* PUT : Add a poject to a collaborator*/
router.put('/collabs/project/:id', function(req, res, next){
    Collaborator.update({_id : req.params.id}, { $addToSet:{professionalExperiences : req.body}}, function(err, post){
        if(err) return next(err);
        else res.json(post);
    });
});

/* DELETE : delete a Collaborator*/
router.delete('/collabs/:id', function(req, res, next){
    Collaborator.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        else res.json(post);
    });
});


module.exports = router;
