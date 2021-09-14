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
    case 'INIT_NOTES':
      return action.data
    default:
      return state
  }
}

export const initNotes = (notes) => {
  return {
    type: 'INIT_NOTES',
    data: notes
  }
}

const createNote = (data) => {
  return {
    type: 'NEW_NOTE',
    data
  }
}

const toggleImpActionCreator = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export { noteReducer, toggleImpActionCreator, createNote }