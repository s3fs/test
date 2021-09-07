import React from "react"
import ReactDOM from 'react-dom'
import { store } from "./reducers/noteReducer"

const App = () => {
  return (
    <div>
      <ul>
        {store.getState().map(n => 
          <li key={n.id}>
            {n.content} <strong>{n.important ? 'note is important' : ''}</strong>
          </li>  
        )}
      </ul>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)