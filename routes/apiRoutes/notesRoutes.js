const router = require('express').Router();
const saveNotes = require('../db/saveNotes');

// GET and POST routes for APIs for notes to save and go in db.json file
router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

