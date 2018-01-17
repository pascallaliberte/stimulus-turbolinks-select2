import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    this.select2mount()
    
    document.addEventListener("turbolinks:before-cache", () => {
      this.select2unmount()
    }, { once: true })
  }
  
  select2mount() {
    let placeholder = $(this.select).data('placeholder')
    
    $(this.select).select2({
      placeholder: placeholder
    });
  }
  
  select2unmount() {
    this.saveState()
    $(this.select).select2('destroy');
  }
  
  saveState() {
    let values = $(this.select).val()
    
    // make sure the HTML itself has those elements selected, since the HTML is what is saved in the turbolinks snapshot
    values.forEach((val) => {
      $(this.select).find(`option[value="${val}"]`).attr('selected', 'selected');
    })
  }
  
  get select() {
    return this.targets.find("select")
  }
}