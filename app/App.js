import { NoteController } from './controllers/NoteController.js';
import { router } from './router-config.js';
import { EventEmitter } from './utils/EventEmitter.js';
const USE_ROUTER = false

class App {

  NoteController = new NoteController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
