import React from "react"
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import { store } from "./reducers/noteReducer"

const genId = () => {
  Math.floor(Math.random() * 1000000)
}

const App = () => {
  const createNote = (content) => {
    return {
      type: 'NEW_NOTE',
      data: {
        content,
        important: false,
        id: genId()
      }
    }
  }
  
  const toggleImpActionCreator = (id) => {
    return {
      type: 'TOGGLE_IMPORTANCE',
      data: { id }
    }
  }

  const addNote = (ev) => {
    ev.preventDefault()
    const content = ev.target.note.value
    ev.target.note.value = ''
    store.dispatch(createNote(content))
  }

  const toggleImp = (id) => {
    store.dispatch(toggleImpActionCreator(id))
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button type='submit'>add</button>
      </form>
      <ul>
        {store.getState().map(n => 
          <li key={n.id} onClick={() => toggleImp(n.id)}>
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