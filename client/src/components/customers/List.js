import React from 'react'
import {connect} from 'react-redux'
import {startGetCustomers} from '../../actions/customers'

function List(props) {
    console.log(props)

    return(
        <div>
            <h3>Listing of Customers</h3>
            <button onClick={() => props.dispatch(startGetCustomers())}>click me!!</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.customers
    }
}

export default connect(mapStateToProps)(List)