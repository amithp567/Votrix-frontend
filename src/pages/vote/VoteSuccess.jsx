
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const VoteSuccess = () => {
      const navigate = useNavigate()
  const [seconds, setSeconds] = useState(5)
  useEffect(() => {
    if (seconds == 0) {
      navigate('/user/login')
      return
    }
    const timer = setTimeout(() => {
      setSeconds(seconds - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [seconds, navigate])
  
    return (
    <div className="min-h-screen w-full bg-gray-200 flex items-center justify-center flex-col">
      <p className="text-4xl font-semibold mb-4">Vote recorded successfully !</p>
      <p>Redirecting to previous page in <span className="font-bold">{seconds}</span>...</p>
    </div>
    )
}

export default VoteSuccess