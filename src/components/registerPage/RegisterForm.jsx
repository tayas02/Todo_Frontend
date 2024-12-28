import React,{useState } from 'react'
import axios from 'axios';
import './RegisterForm.css'
import { Link } from 'react-router-dom';
const url="https://0aec-122-165-248-127.ngrok-free.app/api/login/";

const RegisterForm = () => {
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
        <div className="fandlname"> 
          <input onChange={(e)=>handleChange(e)} type="text" id="first_name" placeholder='First Name' value={data.first_name} />
          <input onChange={(e)=>handleChange(e)} type="text" id="last_name" placeholder='Second Name' value={data.last_name} />
        </div>
        <input onChange={(e)=>handleChange(e)} type="email" id="email" placeholder='Email' value={data.email} />
        <input onChange={(e)=>handleChange(e)} type="password" id="password" placeholder='Enter your password' value={data.password} />
        <button type="click"><Link to="/" >Register</Link>  </button>
        

      </form>
    </div>
  )
}

export default RegisterForm
