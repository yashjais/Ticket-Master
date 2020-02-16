import axios from '../config/axios'

export const setCustomers = (users) => {
    return { type: "SET_CUSTOMERS", payload: users}
}


export const startGetCustomers = () => {
    return (dispatch) => {
        axios.get('/customers')
            .then(response => {
                const users = response.data
                console.log(users)
                dispatch(setCustomers(users))
            })
            .catch(err => console.log(err))
    }
}