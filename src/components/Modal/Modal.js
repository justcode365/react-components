import React, { Component } from 'react'
import './style.css'

export default class Modal extends Component {
  render() {
    const { children, visible, onOk, onCancel } = this.props
    return (
      <div className="modal" style={visible ? {} : { display: 'none' }}>
        <div className="modal-content">
          <span className="modal-close" onClick={onCancel}>
            &times;
          </span>
          {children}
        </div>
      </div>
    )
  }
}
