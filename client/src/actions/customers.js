import axios from '../config/axios'

export default setCustomers = (user) => {
    return { type: "SET_CUSTOMERS", payload: user}
}


export default startGetCustomers = () => {
    return (dispatch) => {
        axios.get('/customers')
            .then(users => console.log(users))
            .catch(err => console.log(err))
    }
}