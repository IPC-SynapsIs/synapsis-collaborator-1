//Model for the collaborator ressource

var mongoose = require('mongoose');

var CollaboratorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    matricule: String,
    entryDate: Date
});

module.exports = mongoose.model('Collaborator', CollaboratorSchema);
