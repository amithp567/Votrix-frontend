import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Login = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (!username || !password){
      setError("All fields required!.")
      return
    }
    try {
      await axios.post("http://127.0.0.1:8000/api/users/login/", { username: username, password: password })
      navigate('/agent/add/user')
    } catch (err) {
      setError("Invalid password or email")
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
        <form action="" className="max-w-md w-full bg-white p-6 shadow rounded " onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center font-bold mb-6">Agent Login</h2>
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">User Name</label>
            <input type="text"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Password</label>
            <input type="password"
              className="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

          <button type='submit' className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700">Login</button>
          <p className="text-sm text-center mt-4 text-gray-600">Not registred? <span className="text-blue-600 hover:underline ml-1 cursor-pointer"
            onClick={() => navigate('/agent/register')}>Register</span></p>
        </form>
      </div>
    </>
  )
}

export default Login
