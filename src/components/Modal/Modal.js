import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.css'

export default class Modal extends Component {
  render() {
    const { children, visible, onOk, onCancel } = this.props
    return visible ? (
      <Inner>
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={onCancel}>
              &times;
            </span>
            {children}
          </div>
        </div>
      </Inner>
    ) : null
  }
}

class Inner extends React.Component {
  el = document.createElement('div')

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}
