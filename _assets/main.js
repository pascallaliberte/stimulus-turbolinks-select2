import Turbolinks from 'turbolinks'
import { Application } from "stimulus"
import { autoload } from "stimulus/webpack-helpers" // changes in 1.0

const application = Application.start()
const controllers = require.context("./controllers", true, /\.js$/)
autoload(controllers, application) // changes in 1.0

Turbolinks.start()