import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {customersReducers} from '../reducers/customers'

const configureStore = () => {
    const store = createStore(combineReducers({
        customers: customersReducers,
        // departments: departmentsReducers,
        // employees: employeesReducers,
        // tickets: ticketsReducers,
        // user: userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore