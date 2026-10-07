import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate=useNavigate()
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [role,setRole]=useState('')
  const [error,setError]=useState('')
  const handleSubmit=async(e)=>{
    console.log(username,password,role)
    e.preventDefault()
    setError("")
    if (!username || !password || !role){
      setError("Required all fields!.")
      return
    }
    try{
    await axios.post('http://127.0.0.1:8000/api/users/register/',{username:username,password:password,role:role})
    navigate('/agent/login')
    }catch(e){
      setError('Invalid data!.')
    }

  }

  return (
    <>
<div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
  <form action=""  className="max-w-md w-full bg-white p-6 shadow rounded" onSubmit={handleSubmit}>
    <p className="text-2xl text-center font-bold mb-6">Agent Register</p>
    <div className="mb-4">
      <label className="block text-sm font-md mb-1">User Name</label>
      <input type="text"  className="w-full border rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-700"
      onChange={(e)=>setUsername(e.target.value)} />
    </div>
        <div className="mb-4">
      <label className="block text-sm font-md mb-1">Password</label>
      <input type="text" className="w-full py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-700" 
      onChange={(e)=>setPassword(e.target.value)}/>
    </div>
        <div className="mb-4">
      <label className="block text-sm block-md mb-1">Role</label>
    <select value={role} id="" className="w-full px-3 py-2 rounded-md border focus:ring-2 focus:ring-blue-700 " onChange={(e)=>setRole(e.target.value)}>
      <option value="" disabled selected  >Select role</option>
      <option value="Agent">Registration Agent</option>
      <option value="Commissioner">Election Commissioner</option>

    </select>
    </div>
        {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

    <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white"  type="submit">Submit</button>
<p className="text-center mt-4 text-sm text-gray-600">Already registerd?<span className="hover:underline text-blue-500 ml-1 cursor-pointer" onClick={()=>navigate('/agent/login')}>Click here</span></p>
  </form>
</div>
    </>
  )
}

export default Register


