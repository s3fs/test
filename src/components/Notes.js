import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleImpActionCreator } from "../reducers/noteReducer"

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong>{note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(({ filter, notes }) => {
    return filter === 'ALL' 
      ? notes
      : filter === 'IMPORTANT'
        ? notes.filter(n => n.important)
        : notes.filter(n => !n.important)
  })

  return (
    <ul>
      {notes.map(note => 
        <Note 
          key={note.id}
          note={note}
          handleClick={() => 
            dispatch(toggleImpActionCreator(note.id))
          }
        />
      )}
    </ul>
  )
}

export default Notes