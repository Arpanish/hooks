import React , {useState , useEffect} from 'react'

function Useeffectruneffectonlyonce() {
    const[x,setx] = useState(0)
    const[y,sety] = useState(0)
    const Logmouseposition = e => {
        console.log('Mouse event')
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(()=>{
        console.log('useeffect is called')
        window.addEventListener('mouseover',Logmouseposition)
    },[])
  return (
    <div>
      x={x}
      <br></br>
      y={y}
    </div>
  )
}

export default Useeffectruneffectonlyonce
