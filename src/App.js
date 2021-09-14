import React, { useEffect } from "react"
import NewNote from "./components/NewNote"
import Notes from "./components/Notes"
import VisibilityFilter from "./components/VisibilityFilter"
import noteService from './services/notes.js'
import { initNotes } from "./reducers/noteReducer"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const res = await noteService.getAll()
      dispatch(initNotes(res.data))
    })()
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App
