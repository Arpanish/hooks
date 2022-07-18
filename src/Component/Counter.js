import React, { useState } from 'react'

function Hookstate() {
    const[counter,setcounter] = useState(0)
  return (
    <div>
        <button onClick={() => setcounter(counter +1)}>Count {counter}</button>
    </div>
  )
}
export default Hookstate
