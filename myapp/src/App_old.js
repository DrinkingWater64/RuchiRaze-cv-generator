import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import Main from './components/Main'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import DefaultHome from './DefaultHome'

import Contact from './views/Contact'
import Education from './views/Education'
import Experience from './views/Experienc'
import Skill from './views/Skill'
import LoginComponent from './views/Login'

const AuthWrapper = ({ isAuthenticated }) => {
    return isAuthenticated ? <Navigate to='/contact' replace /> : <Navigate to='/login' replace />
}

function App() {
    let isAuthenticated = localStorage.getItem('accessToken') === null ? false : true
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/contact' element={<DefaultHome route={<Contact />} />} />
                <Route path='/education' element={<DefaultHome route={<Education />} />} />
                <Route path='/experience' element={<DefaultHome route={<Experience />} />} />
                <Route path='/skill' element={<DefaultHome route={<Skill />} />} />
                r <Route path='/login' element={<LoginComponent />} />
                <Route path='/' element={<AuthWrapper isAuthenticated={isAuthenticated} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
