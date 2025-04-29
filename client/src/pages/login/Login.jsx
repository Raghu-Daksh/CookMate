import React, { useContext, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo4.png'
import axios from 'axios'
import { UsersContext } from '../../context/UserContext'


const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const { setUserDetails } = useContext(UsersContext);

    const [error, setError] = useState(false)

    const handleUser = (e)=>{
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const loginUser = async (e)=>{
        e.preventDefault();

        try {
            const res = await axios.post('https://cookmate-8yiu.onrender.com/user/login', user)
            console.log(res.data);
            if(res.data){
                localStorage.setItem('user', JSON.stringify(res.data))
                setUserDetails(res.data); 
                navigate('/')
            }
          
        } catch (error) {
            console.log(error);
            setError("Invalid email or password")
            
        }
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <form onSubmit={loginUser}>
                <div className='login-inputs'>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleUser} name='email' value={user.email} type="text" placeholder='Username' required />
                   {/* {error && <p>Inavlid User</p>} */}
                    <label htmlFor="password">Passowrd</label>
                    <input onChange={handleUser} name='password' value={user.password} type="password" placeholder='Password' required />
                   {/* {error && <p>Inavlid User</p>} */}
                   {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <button type="submit" className='login-btn' >Login</button>
                {error && <p style={{ color: 'red' }}>Invalid user details</p>} 
            </form>
            <p>if you'r not login, <Link to='/register' >Register</Link> </p>
        </div>
    </div>
  )
}

export default Login
