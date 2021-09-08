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

const genId = () => Number((Math.random() * 1000000).toFixed(0))

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

export { noteReducer, toggleImpActionCreator, createNote }