import React, { Component } from 'react'
import Tabs from './components/Tabs'
import Modal from './components/Modal'

const routesConfig = {
  '#/Tabs': Tabs,
  '#/Modal': Modal
}

export default class App extends Component {
  constructor(props) {
    super(props)
    const { hash } = window.location
    this.state = { hash }
  }

  handleClick = e => {
    const { hash } = e.target
    this.setState({ hash })
  }

  render() {
    const routesArr = Object.keys(routesConfig)
    const C = routesConfig[this.state.hash]

    return (
      <div style={{ display: 'flex' }}>
        <nav style={{ width: '20%', height: '100vh' }}>
          <ul>
            {routesArr.map(name => (
              <li key={name}>
                <a href={name} onClick={this.handleClick}>
                  {name.slice(2)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <main style={{ flex: 1, paddingTop: 100 }}>{C && <C />}</main>
      </div>
    )
  }
}
