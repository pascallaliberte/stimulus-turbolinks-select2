import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "select" ]
  
  connect() {
    this.select2mount()
    
    document.addEventListener("turbolinks:before-cache", () => {
      this.select2unmount()
    }, { once: true })
  }
  
  select2mount() {
    const placeholder = $(this.selectTarget).data('placeholder')
    
    $(this.selectTarget).select2({
      placeholder: placeholder
    });
  }
  
  select2unmount() {
    this.saveState()
    $(this.selectTarget).select2('destroy');
  }
  
  saveState() {
    let values = $(this.selectTarget).val()
    
    // make sure the HTML itself has those elements selected, since the HTML is what is saved in the turbolinks snapshot
    values.forEach((val) => {
      $(this.selectTarget).find(`option[value="${val}"]`).attr('selected', 'selected');
    })
  }
}