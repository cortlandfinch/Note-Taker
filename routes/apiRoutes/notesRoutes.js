const { randomUUID } = require("crypto");
const fs = require("fs");
const path = require("path");
const router = require('express').Router();
const saveNotes = require('../db/saveNotes');

// GET and POST routes for APIs for notes to save and go in db.json file
// Using GET to retrieve notes to db
router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

// Using POST to add the notes to the db
router.post("/api/notes", (req, res) => {
    const noteTitle = req.body.title;
    const noteText = req.body.title;
    if (!noteTitle || !noteText) {
        res.status(400).send('Note must contain both a title and text information!');
    } else {
        const noteDb = {
            id: uuid.v4(),
            title: noteTitle,
            text: noteText
        };
        data.push(noteDb);
        res.json(data);
    };
});

// Using DELETE

module.exports = router;