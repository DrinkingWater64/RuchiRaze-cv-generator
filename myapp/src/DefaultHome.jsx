import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Main from './components/Main'

const DefaultHome = ({ route }) => {
    return (
        <Box>
            <Navbar />
            <Stack direction={'row'} spacing={2} justifyContent='space-between'>
                <Sidebar />
                <Main route={route} />
                <Rightbar />
            </Stack>
        </Box>
    )
}

export default DefaultHome
