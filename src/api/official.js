import api from "./api"

export const ListAgentApproval = async() =>{
    const response = await api.get(
        'users/agents/pending/',
        {withCredentials : true}
    );

    return response.data
}

export const ApproveAgent = async({id}) =>{
    const response = await api.post(
        `users/agents/approve/${id}/`,
        {},
        {
            withCredentials : true
        }
    )

    return response.data
}

export const CreateElection = async(data) =>{
    const response = await api.post(
        'elections/create/',
        data,
        {
            withCredentials : true
        }
    )

    return response.data
}

export const FetchElection = async() =>{
    const response = await api.get(
        "elections/list/",
        {
            withCredentials : true
        }
    )

    return response.data
}

export const AddCandidate = async(election_id, data) => {
  console.log("Election ID:", election_id);
  console.log("Candidate data:", data);
    const response = await api.post(
        `elections/${election_id}/candidate/add/`,
        data,
        {
            withCredentials : true
        }
    )

    return response.data
}