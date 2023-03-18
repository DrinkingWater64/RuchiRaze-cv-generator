import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'

import Contact from '../views/contact'
import Education from '../views/Education'

const SideBarItem = ({ name, icon }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                <SideBarItem name='Contact' icon={<PersonIcon />} />
                <SideBarItem name='Education' icon={<PersonIcon />} />
                <SideBarItem name='Experience' icon={<PersonIcon />} />
                <SideBarItem name='Skill' icon={<PersonIcon />} />
            </List>
        </Box>
    )
}

export default Sidebar
