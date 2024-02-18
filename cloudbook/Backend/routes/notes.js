const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');


//Route 1 : Fetch notes => /api/notes/fetchallnotes
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal server error",
            message: err.message
        });
    }
})

//Route 2 : Adding Notes => /api/notes/addnote
router.post('/addnote', fetchUser, [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 6 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal server error",
            message: err.message
        });
    }

})

//Route 3 : Updating Notes => /api/notes/updatenote
router.put('/updatenote/:id', fetchUser, [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 6 }),
], async (req, res) => {
    const { title, description, tag } = req.body
    try {


        // create a new note object
        const newNote = {}
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        // find the note  to be updated 
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found ") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal server error",
            message: err.message
        });
    }

})

//Route 4 : Delete Notes => /api/notes/deletenote
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        // find the note  to be deleted 
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found ") }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note Deleted", note: note });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Internal server error",
            message: err.message
        });
    }

})
module.exports = router