import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import SummarizeIcon from '@mui/icons-material/Summarize'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <SummarizeIcon sx={{ paddingRight: '5px' }} />
                <Typography variant='3' color='white'>
                    Razeme
                </Typography>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
