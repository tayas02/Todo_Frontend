import React,{useState } from 'react'
import axios from 'axios';
import './LoginForm.css'
const url="https://6ab5-125-23-98-98.ngrok-free.app/api/login";

const LoginForm = () => {
    const [data,setData]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:""
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(url,{
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password,
        })
        .then(res=>{
            console.log(res.data)
        })
    }


    const handleChange=(e)=>{
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }


  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className='formDesign'>
       
      <input onChange={(e)=>handleChange(e)} type="text" id="first_name" placeholder='First Name' value={data.first_name} />
      <input onChange={(e)=>handleChange(e)} type="text" id="last_name" placeholder='Second Name' value={data.last_name} />
        <button type="submit">Log In</button>
        

      </form>
    </div>
  )
}

export default LoginForm
