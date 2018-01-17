import Turbolinks from 'turbolinks'
// import { Application } from "stimulus"
// import { autoload } from "stimulus/webpack-helpers"
// 
// const application = Application.start()
// const controllers = require.context("./controllers", true, /\.js$/)
// autoload(controllers, application)
// 
Turbolinks.start()

$(document).ready(function() {
  $('[data-behavior="multi-select"]').each(function() {
    let placeholder = $(this).data('placeholder')
    
    $(this).select2({
      placeholder: placeholder
    });
  })
});