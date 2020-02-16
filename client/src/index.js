import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";

const rootHandle = document.getElementById('root')

const ele = (
    <div>
        <App />
    </div>
)

ReactDOM.render(ele, rootHandle)