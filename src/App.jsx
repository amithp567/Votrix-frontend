import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import OfficialLogin from './pages/official/OfficialLogin'
import Official from './pages/official/Official'
import RecentActivity from './pages/official/RecentActivity'
import Login from './pages/register/Login'
import Register from './pages/register/Register'
import AddUser from './pages/register/AddUser'
import Success from './pages/register/Success'
import UserLogin from './pages/vote/UserLogin'
import Voting from './pages/vote/Voting'
import VoteSuccess from './pages/vote/VoteSuccess'
import ApprovalPage from './pages/official/ApprovelPage'
import VoterList from './pages/official/VoterList'
import ElectionPage from './pages/official/ElectionPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/official/login' element={<OfficialLogin />} />
        <Route path='/official/dashboard' element={<Official />} />
        <Route path='/official/activity' element={<RecentActivity />} />
        <Route path='/official/approval' element={<ApprovalPage/>}/>
        <Route path='/official/voters/list' element={<VoterList/>}/>
        <Route path='/official/election' element={<ElectionPage/>}/>

        <Route path='/agent/login' element={<Login />} />
        <Route path='/agent/register' element={<Register />} />
        <Route path='/agent/add/user' element={<AddUser />} />
        <Route path='/agent/add/user/success' element={<Success />} />

        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/voting' element={<Voting />} />
        <Route path='/voting/success' element={<VoteSuccess />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
