import React from 'react'
import Home from '../pages/home'
import Triangle from '../pages/triangle'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/triangle" element={<Triangle/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default index