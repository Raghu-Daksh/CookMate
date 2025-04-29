import React, { useState } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo4.png'
import axios from 'axios'
import *  as Yup  from 'yup';

const Register = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    phoneNo: "",
    password: ""
  });

  const [errors, setErrors] = useState()

  let validSchema = Yup.object({
    username: Yup.string().required("username is required"),
    email: Yup.string().email("invalid email format").required("email is required"),
    age: Yup.number().required("age is required").positive("age must be a positive number").integer("age must be an integer").typeError("Age must be a numberr"),
    phoneNo: Yup.string().required("phone number is required").matches(/^[0-9]+$/, "phone number must be a number").min(10, "phone number must be at least 10 digits").max(15, "phone number must be at most 15 digits"),
    password: Yup.string().required("password is required").min(8, "password must be at least 8 characters"),
  });



  const handleUser = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const registerUser = async (e)=>{
    e.preventDefault();
    console.log(user);

    try {
      // Validate the user input using Yup schema
        await validSchema.validate(user, { abortEarly: false });
        console.log("validete", user);
        
        const res = await axios.post('https://cookmate-8yiu.onrender.com', user)
        console.log("res", res.data);
        if(res.data){
          alert("User registered successfully")
            localStorage.setItem('user', JSON.stringify(res.data))
            navigate('/')
        }
        
    } catch (error) {
      // console.log(error.inner);
      const newErrors = {};

      error?.inner?.forEach((err)=>{
        console.log(err.path);
        newErrors[err.path] = err.message;
      })

      setErrors(newErrors);
    }
    
  }

  return (
    <div className='register'>
        <div className='register-container'>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <form action="">
                <div className='register-inputs'>
                  <label htmlFor="username">Username</label>
                    <input onChange={handleUser} value={user.username} name='username' type="text" placeholder='Enter your Username' required />
                    {errors && <p>{  errors.username}</p>}
                    <label htmlFor="email">Email</label>
                    <input onChange={handleUser} value={user.email} name='email' type="email" placeholder='Enter your email' required />
                    {errors && <p>{  errors.email}</p>}
                     <label htmlFor="age">Age</label>
                    <input onChange={handleUser} value={user.age} name='age' type="number" placeholder='Enter your Age' required />
                    {errors && <p>{  errors.age}</p>}
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input onChange={handleUser} value={user.phoneNo} name='phoneNo' type="number" placeholder='Enter your Phone Number' required />
                    {errors && <p>{  errors.phoneNo}</p>}
                    <label htmlFor="text">Password</label>
                    <input onChange={handleUser} value={user.password} name='password' type="password" placeholder='Enter your Password' required />
                    {errors && <p>{  errors.password}</p>}
                </div>
                <button type="submit" className='register-btn' onClick={registerUser}>Register</button>
            </form>
            <p>if you'r already register, <Link to='/login' >Login</Link> </p>
        </div>
    </div>
  )
}

export default Register
