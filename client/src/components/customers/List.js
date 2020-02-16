import React from 'react'
import {connect} from 'react-redux'

function List(props) {
    console.log(props)

    return(
        <div>
            <h3>Listing of Customers</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.customers
    }
}

export default connect(mapStateToProps)(List)