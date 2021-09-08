import React from "react"
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./App"
import { noteReducer } from "./reducers/noteReducer"

const store = createStore(noteReducer)

/*
const logger = () => {
  const currState = store.getState()
  console.log(currState)
}

store.subscribe(logger)
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)