import React, { Component } from 'react'
import Landscape from './Landscape'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ids: [100826, 89609],
    }
  }

  render() {
    return <div>
      {this.state.ids.map(id => <div>
        <Landscape id={id} key={id} />
        <hr/>
      </div>)}

      <button onClick={this.addLand.bind(this)}>Add a Landscape</button>
    </div>
  }

  addLand() {
    var id = prompt("artwork id?")
    var {ids} = this.state
    ids.push(id)
    this.setState({ids})
  }
}
