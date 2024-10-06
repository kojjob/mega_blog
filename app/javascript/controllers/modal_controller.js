import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal"]

  connect() {
    // Ensure the modal is hidden when the controller connects
    this.hide()
  }

  show() {
    this.modalTarget.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")
  }

  hide(event) {
    if (event && event.target === event.currentTarget) {
      this.modalTarget.classList.add("hidden")
      document.body.classList.remove("overflow-hidden")
    }
  }

  submitForm(event) {
    event.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
    this.hide()
  }
}