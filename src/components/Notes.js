import React from "react"
import { connect } from "react-redux"
import { toggleImpActionCreator } from "../reducers/noteReducer"

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}
      <strong>{note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = (props) => {
  return (
    <ul>
      {props.notes.map(note => 
        <Note 
          key={note.id}
          note={note}
          handleClick={() => 
            props.toggleImpActionCreator(note.id)
          }
        />
      )}
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log(`stateFromMapState...`, state)

  if (state.filter === 'ALL') {
    return {
      notes: state.notes
    }
  }
  return {
    notes: (state.filter === 'IMPORTANT'
      ? state.notes.filter(n => n.important)  
      : state.notes.filter
    )
  }
}

const mapDispatchToProps = {
  toggleImpActionCreator
}

const ConnectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Notes)
  
export default ConnectedNotes