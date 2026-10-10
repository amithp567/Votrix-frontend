import { useNavigate } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { MdHowToVote } from "react-icons/md";
import { MdDomainVerification } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import Footer from "../../components/Footer";
import OfficialNavbar from "../../components/OfficialNavbar";

const Official = () => {
  const navigate=useNavigate()
  return (
  <div className="min-h-screen">

    <OfficialNavbar className="fixed top-0 left-0 w-full z-10"/>

    <div className="w-full min-h-screen flex justify-center items-center gap-5 flex-wrap pt-25 pb-5">
      <div className="box-block bg-blue-50 outline-blue-100">
        <div className="bg-blue-200 text-blue-800 rounded-xl p-3">
          <MdHowToVote className="w-10 h-10"/>
        </div>
        <p className="text-xl font-extrabold">Manage Election</p>
        <p className="text-center font-light text-gray-900 text-sm">
          Create, edit, and manage <br />
          elections while overseeing <br />
          the voting process.
        </p>
        <button 
          onClick={()=>navigate('/official/election')} 
          className="box-block-button bg-blue-800">
            Election 
            <span text-white >
              <IoIosArrowRoundForward className="w-8 h-8"/>
            </span>
        </button>
      </div>

      <div className="box-block bg-violet-50 outline-violet-100">
        <div className="bg-violet-200 text-violet-800 rounded-xl p-3">
          <IoPeopleSharp className="w-10 h-10"/>
        </div>
        <p className="text-xl font-extrabold">Voters List</p>
        <p className="text-center font-light text-gray-900 text-sm">
          Manage voter records, <br />
          verify details, and track <br />
          voter information.
        </p>
      <button 
        onClick={()=>navigate('/official/voters/list')}
        className="box-block-button bg-violet-800">
          View List
          <span text-white >
            <IoIosArrowRoundForward className="w-8 h-8"/>
          </span>
      </button>
      </div>

      <div className="box-block bg-emerald-50 outline-emerald-100">
        <div className="bg-emerald-200 text-emerald-700 rounded-xl p-3">
          <MdDomainVerification className="w-10 h-10"/>
        </div>
        <p className="text-xl font-extrabold">Agent Approval</p>
        <p className="text-center font-light text-gray-900 text-sm">
          View pending agent <br />
          requests and approve or <br />
          reject applications.
        </p>
      <button 
      onClick={()=>navigate('/official/approval')} 
      className="box-block-button bg-emerald-700">
        Give Permission
        <span text-white >
          <IoIosArrowRoundForward className="w-8 h-8"/>
        </span>
      </button>
      </div>

      <div className="box-block bg-orange-50 outline-orange-100">
        <div className="bg-orange-200 text-orange-700 rounded-xl p-3">
          <FaClockRotateLeft className="w-10 h-10"/>
        </div>
        <p className="text-xl font-extrabold">Recent Activity</p>
        <p className="text-center font-light text-gray-900 text-sm">
          Monitor recent activities <br />
          and track actions performed <br />
          across the system.
        </p>
      <button 
      onClick={()=>navigate('/official/activity')}
      className="box-block-button bg-orange-700">
        Activities
        <span text-white >
          <IoIosArrowRoundForward className="w-8 h-8"/>
        </span>
      </button>
      </div>
    </div>

    <Footer />

    </div>
  )
}

export default Official
