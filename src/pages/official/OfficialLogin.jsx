import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { officialLogin } from '../../api/api'

const OfficialLogin = () => {
  const navigate = useNavigate()
  const [error,setError]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    const formdata = new FormData(e.currentTarget)
    const data = Object.fromEntries(formdata.entries())
    if(!data.username || !data.password){
      setError('User name and password is required!.')
      return
    }
    try{
      const response = await officialLogin(data);

      localStorage.setItem("access", response.access);
      localStorage.setItem("refresh", response.refresh);
      localStorage.setItem("role", response.profile.role);
      localStorage.setItem("username", response.profile.username);
      toast.success("Logged in successfully!");
      navigate("/official/dashboard", { replace: true });

    }catch(err){
      const error = err.response?.data
      setError(
        error?.detail,
        error?.message,
        'Invalid credentials'
      )

    }
  }

  return (
    <div
      className="w-full min-h-screen 
      flex items-center justify-center 
      bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}>  

      <form 
      className="max-w-sm md:max-w-lg w-full bg-gray-50  p-6 rounded-lg shadow p-2" 
      onSubmit={handleSubmit}>

        <h2 className="text-2xl font-bold text-center mb-6">
          Official Login
        </h2>
        {error && <p className='text-sm text-red-600 text-center'>{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            User Name
          </label>
          <input
            type="text"
            className="inp-box"
            name='username'/>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="inp-box"
            name='password'/>
        </div>

        <button
          type="submit"
          className="submit-btn"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Forgot password?
          <Link to='#'>
            <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
              Click here
            </span> 
          </Link>
        </p>
      </form>

    </div>
  )
}

export default OfficialLogin
