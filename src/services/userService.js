
import axios from "../axios"
const handleLoginApi = (userEmail, usePassword) => {
    return axios.post('/api/login', { email: userEmail, password: usePassword });
}
export { handleLoginApi }
