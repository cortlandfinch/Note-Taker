
const fs = require("fs");
const userNotes = require('../../db/db.json');
const router = require('express').Router();
const uuid = require('uuid');

// GET and POST routes for APIs for notes to save and go in db.json file
// Using GET to retrieve notes to db
router.get('/api/notes', (req, res) => {
    res.json(userNotes)
});

// Using POST to add the notes to the db
router.post("/api/notes", (req, res) => {
    userNotes.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(userNotes));
    res.json(req.body);
});

// Using DELETE

module.exports = router;