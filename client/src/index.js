import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const rootHandle = document.getElementById('root')

const store = configureStore()

store.subscribe(() => {
    console.log('in the index', store.getState())
})

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(ele, rootHandle)