const fs = require("fs");
const router = require('express').Router();
const saveNotes = require('../db/saveNotes');

// GET and POST routes for APIs for notes to save and go in db.json file
// Using GET to retrieve notes to db
router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

// Using POST to add the notes to the db
router.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    // using uuid "universal unique indentifier to create unique id for note"
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes)
});