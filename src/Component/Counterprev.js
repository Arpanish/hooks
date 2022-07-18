import React, { useState } from 'react'

function Counterprev() {
    const initialcount = 0
    const [count,setcount] = useState(initialcount)
  return (
    <div>
        <button>Count : {count}</button>
        <button onClick={() => setcount(initialcount)}>Reset</button>
        <button onClick={() => setcount(count +1)}>Increment</button>
        <button onClick={() => setcount(count -1)}>Decrement</button>
    </div>
  )
}

export default Counterprev