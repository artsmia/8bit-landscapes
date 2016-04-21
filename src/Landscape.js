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
    // transition: '300ms transform linear',
  }
}

export default class App extends Component {
  render() {
    var {id} = this.props
    var path = this.state && this.state.path
    var stringPath = path && path
      .map(({x, y}) => `${x},${y}`)
      .join(' ')

    return <div style={{position: 'relative'}}>
      <img src={`http://${id%7}.api.artsmia.org/800/${id}.jpg`}
        onDrag={this.buildPath.bind(this)}
        onDragStart={this.setBlankDragImage}
      />
      {path && <span ref="dot" style={styles.dot} />}

      <pre>{stringPath}</pre>
      <button onClick={this.run.bind(this)}>Run</button>
      <button onClick={this.clearPath.bind(this)}>clear</button>
    </div>
  }

  buildPath(event) {
    var {nativeEvent} = event
    var {offsetX, offsetY} = nativeEvent

    var currentPath = this.state && this.state.path || []

    currentPath.push({
      x: offsetX,
      y: offsetY,
    })

    this.setState({path: currentPath})
  }

  run() {
    var dot = this.refs.dot
    var adjustment = 30
    var pause = 250

    this.state.path.slice(0, -1).map(({x, y}, index) => {
      setTimeout(() => {
        if(index == 300) alert('learn about landscapes in art')
        dot.style.transform = `translate(${x-adjustment}px, ${y-adjustment}px)`
      }, index*10)
    })
  }

  clearPath() {
    this.setState({path: []})
  }

  // don't let the browser ghost the image as we drag the mouse along it
  setBlankDragImage(dragEvent) {
    var dragIcon = document.createElement('img');
    dragIcon.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    dragIcon.width = 1;
    dragEvent.dataTransfer.setDragImage(dragIcon, -10, -10);
  }
}
