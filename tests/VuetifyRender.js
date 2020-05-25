import * as TestingLibrary from '@testing-library/vue'
import Vuetify from 'vuetify'

export function render(component, options, callback) {
  const root = document.createElement('div')
  root.setAttribute('data-app', 'true')

  return TestingLibrary.render(
    component,
    {
      container: document.body.appendChild(root),
      // for Vuetify components that use the $vuetify instance property
      vuetify: new Vuetify(),
      ...options
    },
    callback
  )
}
