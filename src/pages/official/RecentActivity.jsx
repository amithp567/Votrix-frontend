import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const RecentActivity = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const fetchedRef = useRef(false); // prevents double call

  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    axios
      .get("http://127.0.0.1:8000/api/voting/activity/", {
        withCredentials: true
      })
      .then(res => {
        console.log("ACTIVITY RESPONSE:", res.data);
        setData(res.data);
        console.log(data)
      })
      .catch(err => {
        console.error("ACTIVITY ERROR:", err);
        setError("Failed to load activity");
      });
  }, []);

  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!data) return <p className="p-6">Loading...</p>;

  return (
    
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Recent Activity</h1>

      <section className="bg-white shadow rounded p-4">
        <h2 className="font-semibold mb-2">My Admin Actions</h2>

        {data.admin_activity.length === 0 ? (
          <p>No activity</p>
        ) : (
          <ul className="space-y-2">
            {data.admin_activity.map((a, i) => (
              <li key={i} className="border-b py-2">
                <p className="font-medium">{a.action}</p>
                <p className="text-sm text-gray-600">{a.object}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="bg-white shadow rounded p-4">
  <h2 className="font-semibold mb-2">Recent Registrations</h2>

  {data.recent_registrations.length === 0 ? (
    <p>No registrations</p>
  ) : (
    <ul>
      {data.recent_registrations.map((r, i) => (
        <li key={i} className="border-b py-2">
          {r.name} – {r.panchayat}
        </li>
      ))}
    </ul>
  )}
</section>

    </div>
  );
};

export default RecentActivity;
