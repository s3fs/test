import noteService from '../services/notes'
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

export const initNotes = () => {
  //returns async function
  return async (dispatch) => {
    //async fn takes dispatch fn as an argument and invokes it
    //as soon as the promise is fulfilled
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes.data
    })
  }
}

const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    })
  }
}

const toggleImpActionCreator = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export { noteReducer, toggleImpActionCreator, createNote }