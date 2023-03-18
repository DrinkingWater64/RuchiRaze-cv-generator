import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Contact from '../views/contact'
import Education from '../views/Education'

const Main = () => {
    return (
        <Box flex={4} p={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/contact' component={<Contact />} />
                    <Route path='/education' component={<Education />} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default Main
