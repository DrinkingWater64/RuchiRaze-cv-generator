import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultHome from './DefaultHome'

import Contact from './views/Contact'
import Education from './views/Education'
import Experience from './views/Experienc'
import Skill from './views/Skill'
import LoginComponent from './views/Login'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/contact' element={<DefaultHome route={<Contact />} />} />
                <Route path='/education' element={<DefaultHome route={<Education />} />} />
                <Route path='/experience' element={<DefaultHome route={<Experience />} />} />
                <Route path='/skill' element={<DefaultHome route={<Skill />} />} />
                <Route path='/login' element={<LoginComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
