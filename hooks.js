// only call react hooks at top level 
// dont call hooks inside loop,condition and nested function
// only call hooks from react function


// import { useState } from "react";

// // 1:usestate:allows to use state within functional Component
// syntax:
// const [initialvaluename,methodname] = useState(initialvalue)

// usestate with previous value
// const initialcount = 0
// const [count,setcount] = useState(initialcount)

// usestate with Object
// function Counterobject() {
//     const[name,setname] = useState({Firstname : '' , Lastname : ''})
//     return (
//       <div>
//         <form>
//           <input type ='text' value ={name.Firstname} onChange = {e => setname({Firstname :e.target.value})}></input>
//           <h1>My firstname is {name.Firstname}</h1>


//usestate with array
//function Counterarray() {
    //const [item,setitem] = useState([])




//2:useeffect
//lets you perform side effects(updating dom,fetching datafrom api endpoint,setting up subscription or timer) in functional component
//counter ko value sitai title pani change garnu pare use it
//syntax:
//useEffect(<function>, <dependency>)
//useeffect conditinally run garna lai write second parameter(array of values) that effect depends on
//called after every single render
// [] matra use gare useeffect only once execute hunxa

//npm install axios (to fetch)


// 3:context provide a way to pass data through component tree without having to pass props down manually  at every level

//4: useref hook:makes possible to access dom nodes directly within functional component

// The return function inside useeffect hook is the cleanup function, or when the user leaves the page and the component will unmount.