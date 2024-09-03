import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { saveState } from "../utils/Store.js";

class NotesService {

  CreateNote(NoteDataFromform) {
    const notes = AppState.notes
    const newNote = new Note(NoteDataFromform)
    notes.push(NoteDataFromform)
  }













  setActiveNote(noteId) {
    console.log('setting active note', noteId);
    const notes = AppState.notes
    const foundnotes = notes.find(notes => notes.id == noteId)
    console.log('found note', foundnotes);
    AppState.activeNote = foundnotes


  }



  saveNotes() {
    saveState('notes', AppState.notes)
  }

}



export const notesService = new NotesService()