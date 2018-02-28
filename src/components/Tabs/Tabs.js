import React, { Component } from 'react'
import './style.css'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  render() {
    const { children, onChange } = this.props
    const { activeIndex } = this.state

    return (
      <div className="tabs">
        <ul className="tabs-header">
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              isActive: index === activeIndex,
              tabIndex: index,
              onChange
            })
          )}
        </ul>
        <div className="tabs-content">
          {children[activeIndex] && children[activeIndex].props.children}
        </div>
      </div>
    )
  }
}
