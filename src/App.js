import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var path = this.state && this.state.path
    var stringPath = path && path
      .map(({clientX, clientY}) => `${clientX},${clientY}`)
      .join(' ')
    console.info(stringPath)

    return <div>
      <img src="./100826.jpg"
        onDrag={this.buildPath.bind(this)}
      />

      <pre>{stringPath}</pre>
    </div>
  }

  buildPath(event) {
    var {nativeEvent} = event
    var {clientX, clientY} = nativeEvent

    var currentPath = this.state && this.state.path || []

    currentPath.push({
      clientX,
      clientY,
    })

    this.setState({path: currentPath})
  }
}
