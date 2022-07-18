import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import Useeffect from './Useeffect'

function UseeffectDataFetchingbyid() {
    const[post,setpost] = useState({})
    const[id,setid] = useState(1)
    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[id])
  return (
    <div>
        <input type="text" value={id}  onChange={e => setid(e.target.value)} />
        <div>{post.title}</div>
        {/* <ul>
            {
                post.map(posts => <li key={posts.id}>{posts.title}</li>)
            }
            
        </ul> */}

    </div>
  )
}

export default UseeffectDataFetchingbyid