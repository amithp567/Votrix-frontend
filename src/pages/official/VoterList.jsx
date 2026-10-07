import { useEffect, useState } from "react";
import axios from "axios";

const VoterList = () => {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/voters/list/", {
        withCredentials: true
      })
      .then(res => setVoters(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registered Voters</h1>

      {voters.length === 0 ? (
        <p>No voters found</p>
      ) : (
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Panchayat</th>
              <th className="p-2 text-left">District</th>
              <th className="p-2 text-left">State</th>
            </tr>
          </thead>
          <tbody >
            {voters.map(v => (
              <tr key={v.id} className="border-t">
                <td className="p-2">{v.name}</td>
                <td className="p-2">{v.panchayat}</td>
                <td className="p-2">{v.district}</td>
                <td className="p-2">{v.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VoterList;
