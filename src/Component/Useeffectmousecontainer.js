import React, { useState } from 'react'
import Useeffectruneffectonlyonce from './Useeffectruneffectonlyonce'

function Useeffectmousecontainer() {
    const [display,setdisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setdisplay(!display)}>Toggle</button>
        {display && <Useeffectruneffectonlyonce />}

    </div>
  )
}

export default Useeffectmousecontainer