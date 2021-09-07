import React from "react"
import ReactDOM from 'react-dom'
import { createStore } from "redux"

//reducer gets curr state and desired action and returns changed state
//never invoked directly, but rather
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCR':
      return state + 1
    case 'DECR':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

//is invoked by methods of the store instance created like below
const store = createStore(counterReducer)

const App = () => {
  return (
    <div>
      <div>{store.getState()}</div>
      <button onClick={() => store.dispatch({ type: 'INCR' })}>increase</button>
      <button onClick={() => store.dispatch({ type: 'DECR' })}>decrease</button>
      <button onClick={() => store.dispatch({ type: 'ZERO' })}>to zero</button>
    </div>
  )
}

const logger = () => {
  const currState = store.getState()
  console.log(currState)
}
store.subscribe(logger)

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)