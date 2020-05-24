import axios from 'axios'

const serve = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 50000
})

serve.interceptors.request.use(
    res => {
        return res
    },
    err => {
        return Promise.reject(err)
    }

)

serve.interceptors.response.use(
    res => {
        return res
    },
    err => {
        return Promise.reject(err)
    }
)

export default serve