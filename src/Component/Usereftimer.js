import React,{useState,useEffect,useRef} from 'react'

function Usereftimer() {
    const[timer,settimer] = useState(0)
    const intervalref = useRef()
    useEffect(() => {
        intervalref.current = setInterval(() => {
            settimer( prevTimer => prevTimer+1)
        },1000)
    return () =>{
        clearInterval(intervalref.current)
    };   
    },[])
  return (
    
    <div>
        Hook-timer {timer}
        <button onClick={() =>clearInterval(intervalref.current)}>Clear Hook</button>

    </div>
  )
}

export default Usereftimer