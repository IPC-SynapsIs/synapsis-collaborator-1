var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Collaborator = require('../models/Collaborator.js');


/* GET collaborators listing. */
router.get('/', function(req, res, next) {
    Collaborator.find(function(err, collabs){
        if(err) return next(err);
        else res.json(collabs);    
    });
});

/*GET collaborators by ID*/
router.get('/:id', function(req, res, next) {
    Collaborator.findById(req.params.id, function(err, collab){
        if(err) return next(err);
        else res.json(collab);
    });
})

/*GET collaborators by project ID*/
router.get('/project/:id', function(req, res, next) {
    Collaborator.find({'professionalExperiences.idProject' : req.params.id}, function(err, collabs){
        if(err) return next(err);
        else res.json(collabs);
    });
})

/* POST = create a collaborator*/
router.post('/', function(req, res, next){
    Collaborator.create(req.body, function(err, post){
        if(err) return next(err);
        else res.json(post);
    });
});

/* PUT : Update a collaborator*/
router.put('/:id', function(req, res, next){
    Collaborator.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        else res.json(post);
    });
});

/* DELETE : delete a Collaborator*/
router.delete('/:id', function(req, res, next){
    Collaborator.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        else res.json(post);
    });
});


module.exports = router;
