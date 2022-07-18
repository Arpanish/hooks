import React , {useState,useEffect} from 'react'
import Useeffect from './Useeffect'

function Useeffectinterval() {
    const[count,setcount] = useState(0)
    const tick = () =>{
        setcount(count+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000)
    },[count])
  return (
    <div>
        {count}
    </div>
  )
}

export default Useeffectinterval