import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import Useeffect from './Useeffect'

function UseeffectDataFetchingdataonbutton() {
    const[post,setpost] = useState({})
    const[id,setid] = useState(1)
    const[buttonclick,setbuttonclick] = useState(1)
    const onchangee = () =>{
        setbuttonclick(id)

    }
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonclick}`)
        .then(res =>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[buttonclick])
  return (
    <div>
        <input type="text" value={id}  onChange={e => setid(e.target.value)} />
        <button onClick={onchangee}>Fetch data</button>
        <div>{post.title}</div>
        {/* <ul>
            {
                post.map(posts => <li key={posts.id}>{posts.title}</li>)
            }
            
        </ul> */}

    </div>
  )
}

export default UseeffectDataFetchingdataonbutton