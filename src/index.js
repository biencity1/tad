// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import 'styles/main.scss'
import { BrowserRouter } from 'react-router-dom'


import App from 'components/App'

const renderApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const root = document.getElementById('root')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}