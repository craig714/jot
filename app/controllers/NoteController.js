import { AppState } from "../AppState.js";
import { notesService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js";


export class NoteController {

  constructor() {

    AppState.on('activeNote', this.drawActiveNote)
    AppState.on('notes', this.CreateNote)
    this.drawNoteFiles()
    this.CreateNote()
  }
  drawNoteFiles() {
    const notes = AppState.notes
    let noteHTML = ''
    notes.forEach(note => noteHTML += note.NoteListHTMLTemplate)
    const noteElem = document.getElementById('note-list')
    // @ts-ignore
    noteElem.innerHTML = noteHTML
  }



  setActiveNote(noteId) {
    console.log(`Setting active Note with the id of ${noteId}`);
    notesService.setActiveNote(noteId)
    this.drawActiveNote()
  }



  drawActiveNote() {
    const note = AppState.activeNote
    console.log('drawing active!', note);
    const noteDetails = document.getElementById('note-Details')
    // @ts-ignore
    noteDetails.innerHTML = note.ActiveNoteHTMLTemplate



  }



  CreateNote() {
    event.preventDefault()
    console.log('Creating note');
    const form = event.target
    console.log('new form submitted', form)
    const NoteDataFromform = getFormData(form)
    console.log('note data from form', NoteDataFromform);
    notesService.CreateNote(NoteDataFromform)




  }













}