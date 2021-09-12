import React from "react"
import { filterChange } from "./filterReducer"
import { useDispatch } from "react-redux"

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <input type='radio' name='filter' onChange={() => dispatch(filterChange('ALL'))} /> all
      <input type='radio' name='filter' onChange={() => dispatch(filterChange('IMPORTANT'))} /> important
      <input type='radio' name='filter' onChange={() => dispatch(filterChange('UNIMPORTANT'))} /> unimportant
    </div>
  )
}

export default VisibilityFilter