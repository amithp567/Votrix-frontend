import { useNavigate } from "react-router-dom"


const Official = () => {
  const navigate=useNavigate()
  return (
    <>
<div className="w-full min-h-screen bg-gray-200 flex justify-center items-center gap-5">
  <div className="p-5  bg-blue-800 text-white flex items-center justify-center text-xl rounded text-xl" onClick={()=>navigate('/official/voters/list')}>View List</div>
  <div className="p-5  bg-blue-800 text-white flex items-center justify-center text-xl rounded" onClick={()=>navigate('/official/election')}>election</div>
  <div className="p-5  bg-blue-800 text-white flex items-center justify-center text-xl rounded" onClick={()=>navigate('/official/approval')}>give permission</div>
  <div className="p-5  bg-blue-800 text-white flex items-center justify-center text-xl rounded" onClick={()=>navigate('/official/activity')}>Recent activity</div>

</div>
    </>
  )
}

export default Official
