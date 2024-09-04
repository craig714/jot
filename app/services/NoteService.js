import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { saveState, loadState } from "../utils/Store.js";

class NotesService {

  CreateNote(NoteDataFromForm) {
    const note = AppState.notes
    const newNote = new Note(NoteDataFromForm)
    note.push(NoteDataFromForm)
    console.log(newNote);
    // AppState.on('notes', this.CreateNote)

    this.saveNotes()
  }





  setActiveNote(noteId) {
    console.log('setting active note', noteId);
    const note = AppState.notes
    const foundNote = note.find(note => note.id == noteId)
    console.log('found note', foundNote);
    AppState.activeNote = foundNote
    console.log('new active note', AppState.activeNote);



  }



  // You will need to save notes to local storage after a create, update, or delete, reference gregslist and redacted
  saveNotes() {
    saveState('notes', AppState.notes)
  }

  loadNotes() {
    const notesFromLocalStorage = loadState('notes', [Note])
    AppState.notes = notesFromLocalStorage
  }
  // TODO don't forget to write a method to bring things out of local storage, you will probably need to call this on page load

}



export const notesService = new NotesService()