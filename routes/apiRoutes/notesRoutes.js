const router = require('express').Router();
const saveNotes = require('../db/saveNotes');

router.get('/notes', (req, res) => {
    saveNotes
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

