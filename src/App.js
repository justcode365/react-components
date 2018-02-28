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
      <div style={{ margin: '0 auto' }}>
        <nav>
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
        <main>{C && <C />}</main>
      </div>
    )
  }
}
