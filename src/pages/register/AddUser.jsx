import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const navigate = useNavigate()
  const [name,setName]=useState('')
  const [district,setDistrict]=useState('')
  const [state,setState]=useState('')
  const [panchayat,setPanchayat]=useState('')
  const [houseno,setHouseno]=useState('')
  const [fingerprint,setFingerprint]=useState('')
  const [error,setError]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(name,district,state,panchayat,houseno,fingerprint)
    setError('')
    if (!name || !state || !district || !panchayat || !houseno || !fingerprint) {
      setError("All fields is required!.")
      return
    }
    try{
    await axios.post('http://127.0.0.1:8000/api/voters/register/',
    {name:name,house_no:houseno,state:state,district:district,panchayat:panchayat,fingerprint:fingerprint})
    navigate('/agent/add/user/success',{replace:true})}
 catch (err) {
  const data = err.response?.data

  if (data?.non_field_errors) {
    setError(data.non_field_errors[0])
  } else if (data) {
    const firstKey = Object.keys(data)[0]
    setError(data[firstKey][0])

  } else {   
    setError("Something went wrong. Please try again.")
  }
}
  }
  return (
    <>
      <div className='min-h-screen w-full bg-gray-200 flex items-center justify-center'>
        <form action="" className='max-w-3xl w-full bg-white p-6 rounded shadow' onSubmit={handleSubmit}>
          <h2 className='text-2xl font-bold text-center pb-2'>Add New Voter</h2>
          <hr className='mb-4 ' />

          <div className="mb-4">
            <label htmlFor="" className='block text-sm font-md'>Name</label>
            <input type="text"  className='px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700 w-full' 
            onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className='mb-4 flex gap-4'>
            <div className='flex-1'>
              <label htmlFor="" className='block text-sm font-md'>State</label>
              <input type="text" name="" className=' no-spinner w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700' 
              onChange={(e)=>setState(e.target.value)} />
            </div>
            <div className='flex-1'>
              <label htmlFor="" className="block text-sm font-md">District</label>
              <input type="text" name="" className='no-spinner px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700 w-full' 
              onChange={(e)=>setDistrict(e.target.value)} />
            </div> </div>

          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label htmlFor="" className='block text-sm font-md'>Panchayat</label>
              <input type="text" className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700'
              onChange={(e)=>setPanchayat(e.target.value)} />
            </div>
            <div className="flex-1"><label htmlFor="" className='block text-sm font-md'>House No</label>
              <input type="text" className='w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700'
              onChange={(e)=>setHouseno(e.target.value)} />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="" className='block text-sm font-md'>Finger Print</label>
            <input type="text" name="" id="" className='px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-700 w-full' 
            onChange={(e)=>setFingerprint(e.target.value)}/>
          </div >
          {error && <p className='text-center text-red-600 text-sm'>{error}</p>}
          <div className='w-full flex justify-center'>
            
            <button type="submit" className='mt-4 min-w-xs p-2 text-white bg-blue-600 rounded hover:bg-blue-700 ' >Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddUser