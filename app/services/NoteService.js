import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { saveState } from "../utils/Store.js";

class NotesService {

  CreateNote(NoteDataFromform) {
    const notes = AppState.notes
    const newNote = new Note(NoteDataFromform)
    notes.push(NoteDataFromform)
    console.log(newNote);

  }













  setActiveNote(noteId) {
    console.log('setting active note', noteId);
    const notes = AppState.notes
    const foundnotes = notes.find(notes => notes.id == noteId)
    console.log('found note', foundnotes);
    AppState.activeNote = foundnotes


  }



  // You will need to save notes to local storage after a create, update, or delete, reference gregslist and redacted
  saveNotes() {
    saveState('notes', AppState.notes)
  }
  // TODO don't forget to write a method to bring things out of local storage, you will probably need to call this on page load

}



export const notesService = new NotesService()