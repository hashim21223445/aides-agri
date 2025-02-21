import { Controller } from "@hotwired/stimulus"

const sanitizeForSearch = (someString) => {
  return someString.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

class Suggest extends Controller {
  static targets = ["search", "options", "option", "tags"]

  initialize() {
    this.optionTargets.forEach(option => {
      option.dataset.normalized = sanitizeForSearch(option.textContent)
    })
  }

  search(evt) {
    const q = sanitizeForSearch(evt.target.value)

    // show everything
    this.optionTargets.forEach(elt => {
      elt.classList.remove("fr-hidden")
    })

    // hide every non-matching option
    this.optionTargets.forEach(option => {
      if(!option.dataset.normalized.includes(q)) {
        option.classList.add("fr-hidden")
      }
    })

    this.optionsTarget.classList.remove("fr-hidden")
  }

  choose(evt) {
    evt.target.parentElement.querySelectorAll(".fr-hidden *").forEach(child => {
      child.removeAttribute("disabled")
      this.tagsTarget.appendChild(child.cloneNode(true))
    })
    this.optionsTarget.classList.add("fr-hidden")
    this.searchTarget.value = ""
  }
}

export { Suggest }
