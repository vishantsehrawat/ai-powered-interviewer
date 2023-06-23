import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'
import Interview from '../Pages/Interview'



export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/' element={<Home />} />
                <Route path='/interview' element={<Interview />} />

            </Routes >


        </div >
    )
}

