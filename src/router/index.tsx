import React from 'react'
import Index from '../pages/index'
import Home from '../pages/home/home'
import Triangle from '../pages/triangle/triangle'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/triangle" element={<Triangle />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default index