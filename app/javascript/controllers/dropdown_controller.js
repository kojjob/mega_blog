import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu"]
  static classes = ["hidden"]

  connect() {
    this.boundHandleClickOutside = this.handleClickOutside.bind(this)
    document.addEventListener('click', this.boundHandleClickOutside)
  }

  disconnect() {
    document.removeEventListener('click', this.boundHandleClickOutside)
  }

  toggle(event) {
    event.stopPropagation()
    this.menuTarget.classList.toggle(this.hiddenClass)
  }

  hide() {
    this.menuTarget.classList.add(this.hiddenClass)
  }

  handleClickOutside(event) {
    if (!this.element.contains(event.target)) {
      this.hide()
    }
  }

  get hiddenClass() {
    return this.hasHiddenClass ? this.hiddenClasses[0] : 'hidden'
  }
}