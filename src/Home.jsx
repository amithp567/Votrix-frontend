import { useNavigate } from "react-router-dom"
const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="min-h-screen w-full bg-gray-200 flex flex-col items-center justify-around">

        <p className="pt-8 text-3xl xl:text-6xl  text-center font-black">
          Welcome to Votrix Voting
        </p>

        <div className=" flex  justify-center items-center gap-8 ">
          <button 
            onClick={() => navigate('/official/login')} 
            className="px-4 py-2 bg-blue-800 rounded text-white w-40 h-15 text-2xl">
              Official
          </button>
          <button 
            onClick={() => navigate('/agent/login')} 
            className="px-4 py-2 bg-blue-800 rounded text-white w-40 h-15 text-2xl">
              Register
          </button>
          <button 
          onClick={() => navigate('/user/login')} 
          className="px-4 py-2 bg-blue-800 rounded text-white w-40 h-15 text-2xl">
            Vote
          </button>
        </div>
      </div>
    </>
  )
}

export default Home 