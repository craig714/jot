import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Note } from './models/Note.js'

class ObservableAppState extends EventEmitter {
  notes = [

    new Note({
      title: 'Cool snowboard tricks notes',
      color: '#d40100',
      body: "Backside 180",
    }),
    new Note({
      title: 'Awesome mountains notes',
      color: '#6f42c1',
      body: 'Jackson Hole is epic',
    }),
    new Note({
      title: 'Travel notes',
      color: '#198754',
      body: 'Looking into cheap flights',
    }),

  ]

  /**@type {Note} */
  // @ts-ignore
  activeNote = null

}

export const AppState = createObservableProxy(new ObservableAppState())