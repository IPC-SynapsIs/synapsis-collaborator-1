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
The ressource Collaborator has the following fields : firstName, lastName, matricule, entryDate. Each record is identified by the field id.

It also contains the following fields:
* professionalExperiences : array of professionalExperiences, with the following fields : title, dateStart, dateEnd, idProject, description

* academicBackground : array of academicBackgrounds, with the following fields : title, description

* languages : array of languages, with the following fields : language, level

* miscellaneous : array of miscellaneous, with the following fields : title, description


The app supports all CRUD methods : 

1. GET /collabs : list of all collaborators
2. GET /collabs/{i} : get a collaborator by its id
3. GET /collabs/poject/{i} : get collaborators by their project id
4. POST /collabs : create a collaborator
5. PUT /collabs : update a collaborator
6. DELETE /collabs/{id} : delete a collaborator

##Run with Docker
To build the docker image for this app, use this command:
```
docker build -t poney/collab .
```

You also have to run a container for the mongodb database, to to that simply type 
```
docker run --name mymongo -d mongo
```

Then run the image in a container using the following:
```
docker run -it -p 8080:8080 --link mymongo:mongodatabase poney/collab
```
