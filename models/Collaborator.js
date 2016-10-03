//Model for the collaborator ressource

var mongoose = require('mongoose');

var CollaboratorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    matricule: String,
    entryDate: Date,
    _id:String,
    
    professionalExperiences : [{
        title: String,
        dateStart : Date,
        dateEnd : Date,
        idProject : String,
        description:String    
    }],

    academicBackground : [{
        title:String,
        description: String
    }],

    languages : [{
        language : String,
        level : String
    }],
    
    miscellaneous : [{
        title : String,
        description: String
    }]
});

module.exports = mongoose.model('Collaborator', CollaboratorSchema);
