import { createStore } from "redux"

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'TOGGLE_IMPORTANCE':
      const id = action.data.id
      const toChange = state.find(n => n.id === id)
      const changedNote = {
        ...toChange,
        important: !toChange.important
      }
      return state.map(n => n.id !== id ? n : changedNote)
    default:
      return state
  }
}

const store = createStore(noteReducer)

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'the app state is in redx store',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: 'NEW_NOTE',
  data: {
    content: 'state changes m,ade with actions',
    important: false,
    id: 2
  }
})

export { store, noteReducer }