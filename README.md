# Synapsis-collaborator

Collaborator ressource Using node.js, express.js and mongoDB.

##Install and setup : 
To install, you need to have node.js, npm, mongoDB installed on your system.

Then simply type :
```bash
npm install
```
to install all dependencies locally.

To launch the app, type :
```bash
npm start
```
By default, the app will be exposed on port 3000.

##Data model and methods:
The ressource Collaborator only has the following fields : firstName, lastName, matricule, entryDate. Each record is identified by the field id.

The app supports all CRUD methods : 

1. GET /collabs : list of all collaborators
2. GET /collabs/{i} : get a collaborator by its id
3. POST /collabs : create a collaborator
4. PUT /collabs : update a collaborator
5. DELETE /collabs/{id} : delete a collaborator
