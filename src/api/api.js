import axios from "axios";

const api = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    headers : {
        'Content-Type': 'application/json',
    }
})
export default api


export const officialLogin = async(data) =>{
    const response = await api.post(
        'users/login/',
        data
    )
    return response.data
}