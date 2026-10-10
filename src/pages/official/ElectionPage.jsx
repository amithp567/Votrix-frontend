import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { CreateElection, FetchElection, AddCandidate} from "../../api/official";
import Loading from "../../components/Loading";
import OfficialNavbar from "../../components/OfficialNavbar";
import Footer from "../../components/Footer";

const ElectionPage = () => {
  const [loading, setLoading] = useState(true);
  const [exists, setExists] = useState(false);
  const [election, setElection] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [submiting, setSubmiting] = useState(false)

  const [electionForm, setElectionForm] = useState({
    name: "",
    panchayat: "",
    start_time: "",
    end_time: ""
  });

  const [candidateForm, setCandidateForm] = useState({
    name: "",
    party: "",
    symbol: ""
  });

  useEffect(() => {
    handleFetchElection();
  }, []);

  const handleFetchElection = async() => {
    setLoading(true)
    try{
        const data = await FetchElection()
        setExists(true)
        setElection(data.election)
        setElectionForm(data.election)
        setCandidates(data.election.candidates)
    }catch(error){
      setExists(false)

      const message = (
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Something went wrong !."
      )
      toast.error(message)
    }finally{
      setLoading(false)
    }
  }


  const handleCreateElection = async() => {
    setSubmiting(true)

    try{
      await CreateElection(electionForm)
      toast.success("Election created successfully !.")
      await handleFetchElection()
    }catch(error){
      const message = (
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Something went wrong !."
      )
      toast.error(message)
    }finally{
      setSubmiting(false)
    }
  }


  const updateElection = async () => {
    await axios.put(
      `http://127.0.0.1:8000/api/elections/update/${election.id}/`,
      electionForm
    );
    alert("Election updated");
  };

  const handleAddCandidate = async() => {
    console.log(election.id)
    try{
      await AddCandidate(
        election.id,
        candidateForm
      )
      toast.success('Candidate added succesfully !.')
      await handleFetchElection()
    }catch(error){
      const message = (
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Something went wrong !."
      )
      toast.error(message)
    }
  }

  if (loading) return <Loading text="election loading..."/>

  return (
    <>
    <OfficialNavbar/>
    <div className="p-6 max-w-2xl mx-auto space-y-6 min-h-screen pt-25 pb-5">
      <h1 className="text-xl lg:text-3xl font-bold text-center">Election Management</h1>

      {!exists && (
        <div className="
        bg-white p-4 shadow rounded border border-gray-200
        flex flex-col gap-5 items-center">

          <h2 className="font-semibold mb-3 text-lg lg:text-xl">Create Election</h2>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Election Name
            </label>
              <input
                className="inp-box"
                onChange={e =>
                  setElectionForm({ ...electionForm, name: e.target.value })}/>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Panchayat
            </label>
            <input
              className="inp-box"
              onChange={e =>
                setElectionForm({ ...electionForm, panchayat: e.target.value })}/>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Start Date
            </label>
            <input
              type="datetime-local"
              className="inp-box"
              onChange={e =>
                setElectionForm({ ...electionForm, start_time: e.target.value })}/>
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              End Date
            </label>
            <input
              type="datetime-local"
              className="inp-box"
              onChange={e =>
                setElectionForm({ ...electionForm, end_time: e.target.value })}/>
          </div>

          <button 
            className="submit-btn mt-5" 
            onClick={handleCreateElection}
            disabled={submiting}
          >
            {submiting ? "creating..." : "Create Election"}
          </button>

        </div>
      )}

      {exists && election && (
        <>
          <div className="
            bg-white p-4 shadow rounded border border-gray-200
            flex flex-col gap-5 items-center">

            <h2 className="font-semibold mb-3 text-lg lg:text-xl">Edit Election</h2>
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                Election Name
              </label>
                <input
                  className="inp-box"
                  value={electionForm.name}
                  onChange={e =>
                    setElectionForm({ ...electionForm, name: e.target.value })}/>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                Panchayat
              </label>
              <input
                className="inp-box"
                value={electionForm.panchayat}
                onChange={e =>
                  setElectionForm({ ...electionForm, panchayat: e.target.value })}/>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
                type="datetime-local"
                value={electionForm.start_time?.slice(0, 16)}
                className="inp-box"
                onChange={e =>
                  setElectionForm({ ...electionForm, start_time: e.target.value })}/>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                End Date
              </label>
              <input
                type="datetime-local"
                value={electionForm.end_time?.slice(0, 16)}
                className="inp-box"
                onChange={e =>
                  setElectionForm({ ...electionForm, end_time: e.target.value })}/>
            </div>

            <button 
              className="submit-btn mt-5" 
              onClick={handleCreateElection}
              disabled={submiting}
            >
              {submiting ? "updating..." : "Update Election"}
            </button>

          </div>

          <div className="
            bg-white p-4 shadow rounded border border-gray-200
            flex flex-col gap-5 items-center">

            <h2 className="font-semibold text-lg lg:text-xl">Candidates</h2>

            { 
              candidates.length === 0 ?
                <p className="text-sm text-gray-800">
                  No candidates have been added yet.
                </p> :
                  <table className="w-full shadow rounded">
                    <thead className="bg-gray-300 border border-gray-300">
                      <tr>
                        <th className="p-2 font-medium">Name</th>
                        <th className="p-2 font-medium">Party</th>
                        <th className="p-2 font-medium">Symbol</th>
                      </tr>
                    </thead>
                    <tbody>
                      {candidates.map(candidate => (
                        <tr key={candidate.id} className="text-sm border border-gray-300">
                          <td className="p-2 text-center">{candidate.name}</td>
                          <td className="p-2 text-center">{candidate.party}</td>
                          <td className="p-2 flex justify-center">{candidate.symbol}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
            }
            

            <h3 className="font-semibold text-lg lg:text-xl">Add Candidate</h3>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                Candidate Name
              </label>
              <input
                className="inp-box"
                onChange={e =>
                  setCandidateForm({ ...candidateForm, name: e.target.value })}/>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                Party
              </label>
              <input
                className="inp-box"
                onChange={e =>
                  setCandidateForm({ ...candidateForm, party: e.target.value })}/>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                Symbol
              </label>
              <input
                className="inp-box"
                onChange={e =>
                  setCandidateForm({ ...candidateForm, symbol: e.target.value })}/>
            </div>
            <button 
              className="submit-btn mt-5" 
              onClick={handleAddCandidate}
              disabled={submiting}
            >
              {submiting ? "updating..." : "Add Candidate"}
            </button>
          </div>
        </>
      )}
    </div>
    <Footer />
  </>
  );
};

export default ElectionPage;
