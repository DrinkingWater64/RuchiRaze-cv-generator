import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

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

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Card sx={{ width: 300, marginLeft: 5 }}>
                <CardActionArea>
                    <CardMedia component='img' height='370' image='/images/Cv-png.png' alt='green iguana' />
                    <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant='contained'>Switch</Button>
                    </CardContent>
                </CardActionArea>

                <Typography variant='p' color='initial' sx={{ marginLeft: '5px' }}>
                    Suggestions :
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <List>
                        {/* <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary='JavaScript' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component='a' href='#simple-list'>
                                <ListItemText primary='TypeScript' />
                            </ListItemButton>
                        </ListItem> */}
                        <SideBarItem name='Python' />
                        <SideBarItem name='JavaScript' />
                        <SideBarItem name='C++' />
                    </List>
                </Box>
            </Card>
        </Box>
    )
}

export default Rightbar
