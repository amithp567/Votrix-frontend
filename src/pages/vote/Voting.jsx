import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Voting = () => {
  const navigate = useNavigate();

  const candidates = [
    { id: 1, name: "Candidate A", party: "Party X" },
    { id: 2, name: "Candidate B", party: "Party Y" },
    { id: 3, name: "Candidate C", party: "Party Z" },
  ];

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const submitVote = () => {
    if (!selectedCandidate) return;

    // Redirect directly (or keep delay if you want)
    setTimeout(() => {
      navigate("/voting/success");
    }, 0); // change to 0 if you want instant redirect
  };

  return (
    <div className="min-h-screen w-full bg-gray-200  pt-10 ">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Cast Your Vote
      </h2>

      {/* Header */}
      <div className="grid grid-cols-12 font-semibold border-b pb-2 mb-3">
        <div className="col-span-5">Candidate</div>
        <div className="col-span-5">Party</div>
        <div className="col-span-2 text-center">Select</div>
      </div>

      {/* Rows */}
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className={`grid grid-cols-12 items-center border p-3 rounded mb-2 cursor-pointer
            ${
              selectedCandidate === candidate.id
                ? "bg-blue-50 border-blue-500"
                : "hover:bg-gray-50"
            }`}
          onClick={() => setSelectedCandidate(candidate.id)}
        >
          <div className="col-span-5 font-medium">
            {candidate.name}
          </div>

          <div className="col-span-5 text-gray-600">
            {candidate.party}
          </div>

          <div className="col-span-2 text-center">
            <input
              type="radio"
              name="candidate"
              checked={selectedCandidate === candidate.id}
              onChange={() => setSelectedCandidate(candidate.id)}
            />
          </div>
        </div>
      ))}

      <button
        onClick={submitVote}
        disabled={!selectedCandidate}
        className={`w-full mt-6 py-2 rounded text-white
          ${
            selectedCandidate
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Submit Vote
      </button>
    </div></div>
  );
};

export default Voting;
