import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'
import Interview from '../Pages/Interview'
import Result from '../Pages/Result'
import { InterviewPage } from '../Pages/InterviewPage'
import { PrivateRoute } from './PrivateRoute'
import UserProfile from '../Pages/UserProfile'
import { GetscorePage } from '../Pages/GetscorePage'


export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/profile' element={<UserProfile />}></Route>
                <Route path='/result' element={<Result />} />
                <Route path='/getscore' element={<PrivateRoute><GetscorePage /></PrivateRoute>} />
                <Route path='/interview' element={<PrivateRoute><InterviewPage /></PrivateRoute>} />
            </Routes >


        </div >
    )
}

