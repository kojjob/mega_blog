// hero_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["headline", "description", "buttons"]

  connect() {
    this.animateContent()
  }

  animateContent() {
    this.headlineTarget.classList.add("animate-fadeInUp")
    setTimeout(() => {
      this.descriptionTarget.classList.add("animate-fadeInUp")
    }, 200)
    setTimeout(() => {
      this.buttonsTarget.classList.add("animate-fadeInUp")
    }, 400)
  }
}