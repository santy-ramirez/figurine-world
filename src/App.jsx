import { createRef } from 'react'
import './App.css'

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const ref = createRef()
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    )
}

export default App
