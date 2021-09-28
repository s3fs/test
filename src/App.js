import axios from 'axios'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    //class components contain only one state in comparison to hooks
    //if the store is made up of multiple parts they've all gotta be stored here
    this.state = {
      anecdotes: [],
      current: 0
    }
  }

  //first render
  componentDidMount = async () => {
    const res = await axios.get('http://localhost:3001/anecdotes')
    //setState() always triggers the rerender
    this.setState({ anecdotes: res.data })
  }

  handleClick = () => {
    const current = Math.floor(Math.random() * this.state.anecdotes.length)
    this.setState({ current })
  }

  render() {
    if (this.state.anecdotes.length === 0) {
      return <div>no anecs......</div>
    }

    return (
      <div>
        <h1>Anecdote of tha tag</h1>
        <div>
          {this.state.anecdotes[this.state.current].content}
        </div>
        <button onClick={this.handleClick}>next</button>
      </div>
    )
  }
}

export default App