import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Contact from '../views/Contact'
import Education from '../views/Education'

const Main = ({ route }) => {
    return (
        <Box flex={4} p={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            {route}
        </Box>
    )
}

export default Main
