import React, { Component } from 'react'
import Tabs from './components/Tabs'
import Modal from './components/Modal'
import Tree from './components/Tree'
import { hot } from 'react-hot-loader'

const routesConfig = {
  '#/Tabs': Tabs,
  '#/Modal': Modal,
  '#/Tree': Tree
}

class App extends Component {
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
    const component = routesConfig[this.state.hash]

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
        <main style={{ flex: 1, paddingTop: 100 }}>
          {component && React.createElement(component)}
        </main>
      </div>
    )
  }
}

export default hot(module)(App)
