import React, { Component, Fragment } from 'react'
import './App.css'
import TreeNew from './generateTree'

const tree = new TreeNew()
const time_start = new Date().getTime()

const fetchData = async id => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  )
  const item = await res.json()
  if (!item.kids) {
    tree.add(item.id, item.parent)
    console.warn(new Date().getTime() - time_start)

    return
  }
  item.kids.map(id => {
    fetchData(id)
  })
}

tree.add(16323105)
fetchData(16323105)

const Tree = ({ node }) => {
  if (node.children.length === 0) {
    return node.data
  }
  return (
    <div>
      <div className="parent">{node.data}</div>
      {node.children.map(n => (
        <div key={n.data}>
          <Tree node={n} />
        </div>
      ))}
    </div>
  )
}

class AsyncTree extends React.Component {
  state = { item: {} }
  async componentDidMount() {
    const { id } = this.props

    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
    const item = await res.json()
    this.setState({ item })
  }

  render() {
    const { item } = this.state
    if (Object.keys(item).length === 0) return ''
    // console.warn(new Date().getTime() - this.props.time)
    if (!item.kids) {
      return item.id
    }
    return (
      <div>
        <div className="parent">{item.id}</div>
        {item.kids.map(id => (
          <div key={id}>
            <AsyncTree id={id} time={this.props.time} />
          </div>
        ))}
      </div>
    )
  }
}

class App extends Component {
  render() {
    const time = new Date().getTime()
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tree View</h1>
        </header>
        <main>{/* <Tree node={tree.root} /> */}</main>
        <hr />
        <main>{<AsyncTree id={16323105} time={time} />}</main>
      </div>
    )
  }
}

export default App
