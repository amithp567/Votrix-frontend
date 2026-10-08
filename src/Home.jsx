import { useNavigate } from "react-router-dom"
import { BiSolidLock } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsPersonFillGear } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { MdHowToVote } from "react-icons/md";
import { BsShield } from "react-icons/bs";
import { GoDatabase } from "react-icons/go";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen">

      <Navbar className='fixed top-0 left-0 w-full z-10'/>

      <div className="
        min-h-screen w-full pt-20
        flex flex-col items-center justify-around
        bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('/home-background.png')"}}>

{/* heading section */}
        <div className="flex items-center flex-col gap-5 my-5">
          <p className="
            inline-flex items-center gap-2
            px-4 py-2 bg-blue-100 rounded-3xl
            text-blue-500 font-bold">
            <span className="text-blue-600 rounded-full">
              <BiSolidLock className="h-5 w-5" />
            </span>
            Secure · Transparent · Verifiable
          </p>

          <p className="
            pt-8
            text-4xl md:text-7xl
            text-center font-black">
            Welcome to
            <span className="text-blue-700">
              <br />
              Votrix <span className="text-violet-700">Voting</span>
            </span>
          </p>
          <p className="text-thin text-center mt-5 text-gray-500 mt-10">
            A secure and transparent digital voting system powered by 
            <br />
            zero knowledge proof technology.
          </p>
        </div>

{/* card section contain button for each page */}
        <div className="
          flex flex-col md:flex-row 
          justify-center items-center gap-4 md:gap-8">

          <div className="box-block bg-blue-50 outline-blue-100">
            <div className="bg-blue-200 text-blue-800 rounded-xl p-3">
              <BsPersonFillGear className="w-10 h-10"/>
            </div>

            <p className="text-xl font-extrabold">Officer Login</p>
            <p className="text-center font-light text-gray-900 text-sm">
              Create and manage elections,<br />
              view results and oversee the <br />
              voting process.
            </p>
            <button 
              onClick={() => navigate('/official/login')} 
              className="box-block-button bg-blue-800">
                Officer Login 
                <span text-white >
                  <IoIosArrowRoundForward className="w-8 h-8"/>
                </span>
            </button>
          </div>


          <div className="box-block bg-violet-50 outline-violet-100">
            <div className="bg-violet-200 text-violet-800 rounded-xl p-3">
              <BsFillPersonFill className="w-10 h-10"/>
            </div>
            <p className="text-xl font-extrabold">Agent Login</p>
            <p className="text-center font-light text-gray-900 text-sm">
              Manage voter details,<br />
              assist in the voting process <br />
              and monitor activities.
            </p>
          <button 
            onClick={() => navigate('/agent/login')} 
            className="box-block-button bg-violet-800">
              Agent Login
              <span text-white >
                <IoIosArrowRoundForward className="w-8 h-8"/>
              </span>
          </button>
          </div>

          <div className="box-block bg-emerald-50 outline-emerald-100">
            <div className="bg-emerald-200 text-emerald-700 rounded-xl p-3">
              <MdHowToVote className="w-10 h-10"/>
            </div>
            <p className="text-xl font-extrabold">Cast Your Vote</p>
            <p className="text-center font-light text-gray-900 text-sm">
              Login and cast your vote <br />
              securely. Your vote is private <br />
              and verifiable.
            </p>
          <button 
          onClick={() => navigate('/user/login')} 
          className="box-block-button bg-emerald-700">
            Vote Now
            <span text-white >
              <IoIosArrowRoundForward className="w-8 h-8"/>
            </span>
          </button>
          </div>

        </div>

{/* bottom section */}
        <div className="
        inline-flex flex-col md:flex-row gap-2 md:gap-10 
        p-5 text-blue-600 text-sm">

          <div className="inline-flex gap-2 ">
            <BsShield className="h-4 w-4"/>Privacy First
          </div>
          <div className="font-thin hidden md:block">|</div>

          <div className="inline-flex gap-2">
            <GoDatabase className="h-4 w-4"/>Tamper Proof
          </div>
          <div className="font-thin hidden md:block">|</div>

          <div className="inline-flex gap-2">
            <FaRegCircleCheck className="h-4 w-4"/>Verifiable Results
          </div>
          <div className="font-thin hidden md:block">|</div>

          <div className="inline-flex gap-2">
            <BsLightningCharge className="h-4 w-4"/>Fast & Reliable
          </div>
        </div>


      </div>

      <Footer/>
    </div>
  )
}

export default Home 