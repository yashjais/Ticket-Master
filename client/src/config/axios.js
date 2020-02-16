import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3015'
})

export default axios