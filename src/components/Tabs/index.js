import React, { Component } from 'react'
import Tabs from './Tabs'
import Tab from './Tab'

export default class TabsExample extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  handleChange = index => {
    this.setState({ activeIndex: index })
  }
  render() {
    return (
      <Tabs activeIndex={this.state.activeIndex} onChange={this.handleChange}>
        <Tab title={'1'}>Tab 1</Tab>
        <Tab title={'2'}>Tab 2</Tab>
        <Tab title={'3'}>Tab 3</Tab>
      </Tabs>
    )
  }
}
