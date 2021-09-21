import React, { useState } from "react"

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (ev) => {
    setValue(ev.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const App = () => {
  const name = useField('text')
  const bd = useField('date')
  const height = useField('number')

  return (
    <div>
      <form>
        name: 
        <input
          type={name.type}
          value={name.value}
          onChange={name.onChange} 
        /> 
        <br/> 
        birthdate:
        <input
          type={bd.type}
          value={bd.value}
          onChange={bd.onChange}
        />
        <br /> 
        height:
        <input
          type={height.type}
          value={height.value}
          onChange={height.onChange}
        />
      </form>
      <h2>
        {name.value} / {bd.value} / {height.value} 
      </h2>
    </div>
  )
}

export default App
