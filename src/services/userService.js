
import axios from "../axios"
const handleLoginApi = (userEmail, usePassword) => {
    return axios.post('/api/login', { email: userEmail, password: usePassword });
}
const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}
export { handleLoginApi, getAllUsers }
