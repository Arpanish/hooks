import React , {useState , useEffect} from 'react'

function Useeffect() {

    const[counter,setcounter] = useState(0)
    const[name,setname] = useState('')

    useEffect(() => {
        document.title = `You clicked ${counter} times`
        console.log("updated")
    },[counter])
  return (
    <div>
        <input type="text" value = {name} onChange={e => setname(e.target.value)}></input>
        <button onClick={()=>setcounter(counter + 1)}>Count {counter}</button>
    </div>
  )
}

export default Useeffect