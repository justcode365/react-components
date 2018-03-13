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
            <header>
              <span>Modal</span>

              <a className="modal-close" onClick={onCancel}>
                &times;
              </a>
            </header>
            <main>{children}</main>

            <footer>
              <button onClick={onCancel}>Cancel</button>
              <button onClick={onCancel}>Ok</button>
            </footer>
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
