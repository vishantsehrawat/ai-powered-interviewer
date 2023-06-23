import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'
import { InterviewPage } from '../Pages/InterviewPage'
import { PrivateRoute } from './PrivateRoute'



export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/interviewpage' element={<PrivateRoute><InterviewPage /></PrivateRoute>} />


            </Routes>


        </div>
    )
}

