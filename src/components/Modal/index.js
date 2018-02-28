import React, { Component } from 'react'
import Modal from './Modal'

export default class Tabs extends Component {
  state = { visible: false }

  toggleVisible = () => this.setState(prevState => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state
    return (
      <div>
        <button style={{ cursor: 'pointer' }} onClick={this.toggleVisible}>
          show modal
        </button>
        <Modal
          visible={visible}
          title="Modal Example"
          onOk={this.toggleVisible}
          onCancel={this.toggleVisible}
        >
          <h3>title</h3>
          <input type="text" />
        </Modal>
      </div>
    )
  }
}
