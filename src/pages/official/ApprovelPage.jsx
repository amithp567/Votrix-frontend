import { useEffect, useState } from "react";
import axios from "axios";

const ApprovalPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPending();
  }, []);

  const fetchPending = () => {
    axios
      .get("http://127.0.0.1:8000/api/users/pending/", {
        withCredentials: true
      })
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  const approveUser = (id) => {
    axios
      .post(
        `http://127.0.0.1:8000/api/users/approve/${id}/`,
        {},
        { withCredentials: true }
      )
      .then(() => fetchPending());
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Approvals</h1>

      {users.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Username</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t">
                <td className="p-2">{user.username}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                  <button
                    onClick={() => approveUser(user.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApprovalPage;
