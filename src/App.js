import React, { Component } from 'react';

var styles = {
  dot: {
    width: '50px',
    height: '50px',
    display: 'block',
    position: 'absolute',
    background: 'url(./character.png) no-repeat transparent',
    backgroundSize: 'contain',
    top: 0,
    left: 0,
    transition: '300ms transform linear',
  }
}

export default class App extends Component {
  render() {
    var path = this.state && this.state.path
    var stringPath = path && path
      .map(({clientX, clientY}) => `${clientX},${clientY}`)
      .join(' ')

    return <div style={{position: 'relative'}}>
      <img src="./100826.jpg"
        onDrag={this.buildPath.bind(this)}
      />
      {path && <span ref="dot" style={styles.dot} />}

      <pre>{stringPath}</pre>
      <button onClick={this.run.bind(this)}>Run</button>
      <button onClick={this.clearPath.bind(this)}>clear</button>
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

  run() {
    var dot = this.refs.dot
    var adjustment = 30
    var pause = 250

    this.state.path.slice(0, -1).map(({clientX, clientY}, index) => {
      setTimeout(() => {
        if(index == 300) alert('learn about landscapes in art')
        dot.style.transform = `translate(${clientX-adjustment}px, ${clientY-adjustment}px)`
      }, index*10)
    })
  }

  clearPath() {
    this.setState({path: []})
  }
}
