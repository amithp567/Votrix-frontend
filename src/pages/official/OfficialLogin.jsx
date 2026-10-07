import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OfficialLogin = () => {
  const navigate = useNavigate()
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")
    if(!username || !password){
      setError('User name and password is required!.')
      return
    }
    try{
      await axios.post('http://127.0.0.1:8000/api/users/official/login/',{username:username,password:password})
      navigate('/official/dashboard')
    }catch(err){
      setError('Invalid credentials')
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
      
      <form className="max-w-md w-full bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
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
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Forgot password?
          <span className="text-blue-600 hover:underline ml-1 cursor-pointer">
            Click here
          </span> 
        </p>
      </form>

    </div>
  )
}

export default OfficialLogin
