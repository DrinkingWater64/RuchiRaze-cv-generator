import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'

const Experience = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [joinYear, setJoinYear] = useState('')
    const [leaveYear, setLeaveYear] = useState('')
    const [desc, setDesc] = useState('')

    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value)
    }

    const handleCompanyChange = (event) => {
        setCompany(event.target.value)
    }

    const handleJoinYearChange = (event) => {
        setJoinYear(event.target.value)
    }

    const handleLeaveYearChange = (event) => {
        setLeaveYear(event.target.value)
    }

    const handleDescChange = (event) => {
        setDesc(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            jobTitle,
            company,
            joinYear,
            leaveYear,
            desc,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box display={'flex'} alignItems='center' flexDirection={'column'} marginRight='220px' marginTop={'1px'}>
                <TextField
                    label='jobTitle'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                />
                <TextField
                    label='company'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={company}
                    onChange={handleCompanyChange}
                />
                <TextField
                    label='Join Year'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={joinYear}
                    onChange={handleJoinYearChange}
                />
                <TextField
                    label='Join Year'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={leaveYear}
                    onChange={handleLeaveYearChange}
                />
                <TextField
                    label='Join Year'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={leaveYear}
                    onChange={handleLeaveYearChange}
                />
                <TextField
                    label='Description'
                    multiline
                    rows={4}
                    variant='outlined'
                    name='description'
                    required
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={desc}
                    onChange={handleDescChange}
                />
            </Box>
            <Button type='submit' variant='contained' color='primary' sx={{ margin: '40px' }}>
                Submit
            </Button>
        </form>
    )
}

export default Experience
