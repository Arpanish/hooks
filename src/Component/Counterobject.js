import React, { useState } from 'react'

function Counterobject() {
  const[name,setname] = useState({Firstname : '' , Lastname : ''})
  return (
    <div>
      <form>
        <input type ='text' value ={name.Firstname} onChange = {e => setname({Firstname :e.target.value})}></input>
        <h1>My firstname is {name.Firstname}</h1>
        
        
      </form>
    </div>
  )
}

export default Counterobject