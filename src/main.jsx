import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import { ToastContainer } from 'react-toastify'
import {Provider} from "react-redux"
import {store} from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
        <ToastContainer />
    </Provider>,
)
