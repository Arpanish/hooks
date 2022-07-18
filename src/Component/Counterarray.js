import React, { useState } from 'react'

function Counterarray() {
    const [item,setitem] = useState([])
    const items = () =>{
        setitem([...item,{
            id : item.length,
            value : Math.floor(Math.random()*5)
        }])
    }
  return (
    <div>
        <button onClick={items}>Items</button>
        <ul>
            {item.map(items => (
                <li key={items.id}>{items.value}</li>
            ))}
        </ul>

    </div>
  )
}

export default Counterarray