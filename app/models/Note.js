import { generateId } from "../utils/GenerateId.js"



export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.updatedAt = new Date()
    this.createdAt = data.lastcreatedAt == undefined ? new Date() : new Date(data.lastcreatedAt)

  }

  get NoteListHTMLTemplate() {
    return `
     <div id="note-list">
            <div onclick="app.NoteController.setActiveNote('${this.id}')" role="button" class="selectable">
              <p>${this.title}</p>
              <p>${this.body}</p>
              <p>${this.CreatedATFullDateAndTime}</p>
            </div>
          </div>
      `
  }


  get ActiveNoteHTMLTemplate() {

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