import React, {useState,useEffect} from 'react'
import axios from 'axios'
// import Useeffect from './Useeffect'

function UseeffectDataFetching() {
    const[post,setpost] = useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
  return (
    <div>
        <ul>
            {
                post.map(posts => <li key={posts.id}>{posts.title}</li>)
            }
            
        </ul>

    </div>
  )
}

export default UseeffectDataFetching