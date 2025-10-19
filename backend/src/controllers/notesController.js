import Note from '../models/noteModel.js';

export async function getAllNotes(req,res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getALLNotes controller", error);
        res.status(500).json({message: "Error retrieving notes"});
    }
    
}

export async function createNote(req,res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Error creating note"});
    }
}

export async function updateNote(req,res) {
    res.status(200).json({message: "your note has been updated successfully"});
}

export async function deleteNote(req,res) {
    res.status(200).json({message: "your note has been deleted successfully"});
}
