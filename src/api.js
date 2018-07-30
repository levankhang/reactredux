import axios from 'axios'

export default {
    user: {
        login: data => axios.post('http://localhost:8000/user/login', {data}).then(res=> res.data.user),
        register: data => axios.post('http://localhost:8000/user/register', {data}).then(res=>res.data.user)
    }
}