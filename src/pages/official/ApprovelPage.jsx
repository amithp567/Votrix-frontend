import { useEffect, useState } from "react";
import { ListAgentApproval, ApproveAgent } from "../../api/official";
import { toast } from 'react-toastify';
import OfficialNavbar from "../../components/OfficialNavbar";
import Footer from "../../components/Footer"

const ApprovalPage = () => {
  const [showApprove, setShowApprove] = useState(false)
  const [isApproving, setIsApproving] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPending();
  }, []);

  const fetchPending = async() => {
    try{
      const data = await ListAgentApproval()
      setUsers(data)
    }catch(error){
      const message = 
      error.response?.data?.detail ||
      error.response?.data?.message ||
      "Something went wrong !."

      toast.error(message)
    }
  }

  const approveUser = async() => {
    if (selectedUser === null || isApproving){
      return;
    }

    setIsApproving(true)

    try{
      console.log(selectedUser)
      await ApproveAgent({id : selectedUser})

      toast.success('Agent approved successfully !.')

      setSelectedUser(null)
      setShowApprove(false)

      await fetchPending()
    }catch(error){
      const message = (
      error.response?.data?.detail ||
      error.response?.data?.message ||
      "Something went wrong !."
      );
      
      toast.error(message)
    }finally{
      setIsApproving(false)
    }
  }

  return (
    <>
    <OfficialNavbar />
    <div className="p-6 min-h-screen pt-25 pb-5">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Pending Approvals
      </h1>

      {users.length === 0 ? (
        <p className="text-center">No pending requests</p>
      ) : (
        <table className="w-full shadow rounded">
          <thead className="bg-gray-300 border border-gray-300">
            <tr>
              <th className="p-2">Username</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="text-sm border border-gray-300">
                <td className="p-2 text-center">{user.username}</td>
                <td className="p-2 text-center">{user.role}</td>
                <td className="p-2 flex justify-center">
                  <button
                    onClick={() => {
                      setShowApprove(true);
                      setSelectedUser(user.id);
                    }}
                    className="bg-green-600 text-white px-3 py-1 rounded">
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
      {showApprove && (
        <div className="
        fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-900">
              Confirm Approve
            </h2>
            <p className="mt-3 text-sm text-gray-600">
              Are you sure you want to approve this user ?
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowApprove(false);
                  setSelectedUser(null);
                }}
                disabled={isApproving}
                className="
                rounded-lg border border-gray-300 w-20 py-2 
                text-gray-700 hover:bg-gray-100 disabled:opacity-50">
                No
              </button>
              <button
                type="button"
                onClick={approveUser}
                disabled={isApproving || selectedUser === null}
                className="
                rounded-lg bg-red-600 w-20 py-2 text-white 
                hover:bg-red-700 disabled:opacity-50">
                {isApproving ? 'Approving...' : 'Yes'}
              </button>
            </div>
          </div>
        </div>
    )}
    <Footer />
  </>
  );
};

export default ApprovalPage;
