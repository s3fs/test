/**
 * useful hook resources:
 * https://github.com/rehooks/awesome-react-hooks
 * https://usehooks.com/
 * https://overreacted.io/why-do-hooks-rely-on-call-order/
 * 
 */

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
        <input {...name} /> 
        <br/> 
        birthdate:
        <input {...bd} />
        <br /> 
        height:
        <input {...height} />
      </form>
      <h2>
        {name.value} / {bd.value} / {height.value} 
      </h2>
    </div>
  )
}

export default App
