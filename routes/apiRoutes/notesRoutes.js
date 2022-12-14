
const fs = require("fs");
const router = require('express').Router();
const userNotes = require('../../db/db.json');
// universal unique identifier "uuid" npm package to set unique id to note
const { v4: uuidv4} = require('uuid');

// GET and POST routes for APIs for notes to save and go in db.json file
// Using GET to retrieve notes to db
// Takes the notes user creates to the notes page
router.get('/notes', (req, res) => {
    res.json(userNotes)
});

// Using POST to add the notes to the db
router.post("/notes", (req, res) => {
    // using newNoteId for uuid so each note gets its own unique id everytime it is called
    const newNoteId = uuidv4();
    // using userNote to construct to db.json
    const userNote = {
        id: newNoteId,
        title: req.body.title,
        text: req.body.text
    };
    userNotes.push(userNote);
    res.json(userNote);
    // converts userNotes to string 
    fs.writeFileSync('./db/db.json', JSON.stringify(userNotes));
});

// Using DELETE to remove any notes added **currently broken
router.delete("/notes/:id", (req, res) => {
    const newNoteId = uuidv4();
    const newNotes = userNotes.filter((uuidv4) => {uuidv4.id != newNoteId})

    if(!newNotes){
        res.status(500).send("Note was not found.");
    } else {
        userNotes = newNotes;
        res.send(userNotes);
    }
});

module.exports = router;