import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { TextField, Button } from '@mui/material'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

const Experience = () => {
    const navigate = useNavigate()

    const [jobTitle, setJobTitle] = useState('')
    const [company, setCompany] = useState('')
    const [joinYear, setJoinYear] = useState('')
    const [leaveYear, setLeaveYear] = useState('')
    const [desc, setDesc] = useState('')
    const [experiences, setExperiences] = useState([])

    const handleJobTitleChange = (event) => {
        setJobTitle(event.target.value)
        localStorage.setItem('jobTitle', JSON.stringify(jobTitle))
    }

    const handleCompanyChange = (event) => {
        setCompany(event.target.value)
        localStorage.setItem('company', JSON.stringify(company))
    }

    const handleJoinYearChange = (event) => {
        setJoinYear(event.target.value)
        localStorage.setItem('joinYear', JSON.stringify(joinYear))
    }

    const handleLeaveYearChange = (event) => {
        setLeaveYear(event.target.value)
        localStorage.setItem('leaveYear', JSON.stringify(leaveYear))
    }

    const handleDescChange = (event) => {
        setDesc(event.target.value)
        localStorage.setItem('desc', JSON.stringify(desc))
    }

    const addExp = (e) => {
        console.log('hello')
        e.preventDefault()
        const experience = {
            jobTitle,
            company,
            joinYear,
            leaveYear,
            desc,
        }
        setExperiences([...experiences, experience])
        setJobTitle('')
        setCompany('')
        setJoinYear('')
        setLeaveYear('')
        setDesc('')
    }

    const handleExperienceSubmit = (event) => {
        event.preventDefault()
        // const experience = {
        //     jobTitle,
        //     company,
        //     joinYear,
        //     leaveYear,
        //     desc,
        // }
        // setExperiences([...experiences, experience])
        console.log(experiences)
        navigate('/skill')
        // setExperiences([...experiences, experience])
        // setJobTitle('')
        // setCompany('')
        // setJoinYear('')
        // setLeaveYear('')
        // setDesc('')
    }

    return (
        <>
            <form>
                <Box display={'flex'} alignItems='center' flexDirection={'column'} marginRight='220px' marginTop={'1px'}>
                    <TextField
                        label='Job Title'
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
                        label='Company'
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
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        label='Join Year'
                        required
                        variant='outlined'
                        margin='normal'
                        type='date'
                        autoComplete='text'
                        autoFocus
                        value={joinYear}
                        onChange={handleJoinYearChange}
                    />
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        label='Leave Year'
                        required
                        variant='outlined'
                        margin='normal'
                        type='date'
                        autoComplete='text'
                        autoFocus
                        value={leaveYear}
                        onChange={handleLeaveYearChange}
                    />

                    <Button onClick={addExp} variant='contained' color='primary' sx={{ margin: '20px' }}>
                        Add Experience
                    </Button>
                    <Button onClick={handleExperienceSubmit} type='submit' variant='contained' color='primary'>
                        Next
                    </Button>
                </Box>
            </form>

            <div>
                <h2>Experiences:</h2>
                <ul>
                    {experiences.map((exp, index) => (
                        <li key={index}>
                            <p>Job Title: {exp.jobTitle}</p>
                            <p>Company: {exp.company}</p>
                            <p>Join Year: {exp.joinYear}</p>
                            <p>Leave Year: {exp.leaveYear}</p>
                            <p>Description: {exp.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Experience
