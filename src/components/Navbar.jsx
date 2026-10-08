import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({className}) => {
  return (
    <div className=
    {`${className} h-20  flex items-center justify-around 
    bg-gray-50 border-b-1 border-gray-200`}>

      <div className='text-4xl font-black text-blue-800'>Votrix</div>
      <div className='flex gap-10'>
        <Link to='/'><div>Home</div></Link>
        <Link to='#'><div>About</div></Link>
        <Link to='#'><div>Help</div></Link>
      </div>
      
    </div>
  )
}

export default Navbar