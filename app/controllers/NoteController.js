import { AppState } from "../AppState.js";
import { notesService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";

export class NoteController {

  constructor() {

    AppState.on('notes', this.drawNoteFiles)
    AppState.on('activeNote', this.drawActiveNote)
    // FIXME we do not want to create a note when the notes array in the appstate changes
    // FIXME after the notes array is changed in the appstate, you need to draw your list of notes

    this.drawNoteFiles()

    notesService.loadNotes()

    // REVIEW anything inside the constructor will run on page load, we do not want to create a Note until the user fills out the form
    // this.CreateNote()
  }
  drawNoteFiles() {
    const notes = AppState.notes
    let noteHTML = ''
    notes.forEach(note => noteHTML += note.NoteListHTMLTemplate)
    // const noteElem = document.getElementById('note-list')
    // // @ts-ignore
    // noteElem.innerHTML = noteHTML
    setHTML('note-list', noteHTML)

    // TODO add an id in your html that you can draw the note count to
    // TODO set that elements innerText to the amount of notes you have in the appstate.  done
  }



  setActiveNote(noteId) {
    console.log(`Setting active Note with the id of ${noteId}`);
    notesService.setActiveNote(noteId)
    this.drawActiveNote()
  }



  drawActiveNote() {
    const note = AppState.activeNote
    console.log('drawing active!', note);
    // const noteDetails = document.getElementById('note-Details')
    // @ts-ignore
    // noteDetails.innerHTML = note.ActiveNoteHTMLTemplate
    setHTML('activeNote', activeNote.ActiveNoteHTMLTemplate)

  }



  CreateNote() {
    // @ts-ignore
    event.preventDefault()
    console.log('Creating note');
    // @ts-ignore
    const form = event.target
    console.log('new form submitted', form)
    const NoteDataFromForm = getFormData(form)
    console.log('note data from form', NoteDataFromForm);
    notesService.CreateNote(NoteDataFromForm)

  }

  // TODO reference my code from redacted when I update a CaseFile (updateCaseFile)

  // TODO reference my code from gregslist for adding delete method (deleteCar)












}