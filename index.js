import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// importing the reducers from source
import allReducer from './src/reducers'
const store = createStore(allReducer)
 

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, 
    // use root instead, app?
    document.getElementById('react-root'))