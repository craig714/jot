import { generateId } from "../utils/GenerateId.js"



export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body || ''
    // TODO you will probably need to check if the notes coming out of localstorage have a updatedAt already assigned to them. Reference CaseFile Model
    this.updatedAt = new Date()
    // FIXME your Notes will most likely never have a property called lastcreatedAt, make sure you are looking at a property that can exist on the note class. Reference Car model
    this.createdAt = data.lastcreatedAt == undefined ? new Date() : new Date(data.lastcreatedAt)

  }

  get NoteListHTMLTemplate() {
    return `
            <div onclick="app.NoteController.setActiveNote('${this.id}')" role="button" class="selectable">
              <p>${this.title}</p>
              <p>${this.body}</p>
              <p>${this.CreatedATFullDateAndTime}</p>
            </div>
      `
  }


  get ActiveNoteHTMLTemplate() {
    // TODO add onblur to textarea, and have it call your update method that you still need to write, reference redacted for this (updateCaseFile)
    // TODO add onclick to your Delete "button" that will call the delete method from your controller that you still need to write, reference deleteCar from gregslist
    // TODO resize the text area so that it takes up the majority of the page (you can alter the height of a textarea with css) done
    // TODO add the note's color to the active template somewhere, reference gregslist card template to see where I interpolated into an inline style
    return `

      <div div id = "popNote" class="popNote" >
              <h3 id="noteTitle">${this.title}</h3>
              <p>Created on:${this.CreatedATFullDateAndTime}</p>
              <p>Last updated:${this.LastAccessedFullDatAndTime}</p>
              <p class="btn btn-primary">Delete</p>
              <p class="btn btn-primary">Save</p>
              <textarea id="noteContent" class="form-control" rows="10"></textarea>
            </div >



      `
  }




  get LastAccessedFullDatAndTime() {
    return this.updatedAt.toLocaleDateString()
  }



  get CreatedATFullDateAndTime() {
    return this.createdAt.toLocaleDateString()
  }
























}