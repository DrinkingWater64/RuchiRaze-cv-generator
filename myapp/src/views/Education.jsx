import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

const Education = () => {
    const navigate = useNavigate()

    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [joinYear, setJoinYear] = useState('')
    const [gradYear, setGradYear] = useState('')
    // const [desc, setDesc] = useState('')
    const [educations, setEducations] = useState([])

    const handleSchoolChange = (event) => {
        setSchool(event.target.value)
        localStorage.setItem('school', JSON.stringify(school))
    }

    const handleDegreeChange = (event) => {
        setDegree(event.target.value)
        localStorage.setItem('degree', JSON.stringify(degree))
    }

    const handleJoinYearChange = (event) => {
        setJoinYear(event.target.value)
        localStorage.setItem('joinYear', JSON.stringify(joinYear))
    }

    const handleGradYearChange = (event) => {
        setGradYear(event.target.value)
        localStorage.setItem('gradYear', JSON.stringify(gradYear))
    }

    // const handleDescChange = (event) => {
    //     setDesc(event.target.value)
    // }

    const addEd = (e) => {
        console.log('hello')
        e.preventDefault()
        const education = {
            school,
            degree,
            joinYear,
            gradYear,
        }
        setEducations([...educations, education])
        setSchool('')
        setDegree('')
        setJoinYear('')
        setGradYear('')
        // setDesc('')
    }

    const handleEducationSubmit = (event) => {
        event.preventDefault()

        console.log(educations)
        navigate('/experience')
    }

    return (
        <>
            <form>
                <Box display={'flex'} alignItems='center' flexDirection={'column'} marginRight='220px' marginTop={'1px'}>
                    <TextField
                        label='School'
                        required
                        variant='outlined'
                        margin='normal'
                        type='text'
                        autoComplete='text'
                        autoFocus
                        value={school}
                        onChange={handleSchoolChange}
                    />
                    <TextField
                        label='Degree'
                        required
                        variant='outlined'
                        margin='normal'
                        type='text'
                        autoComplete='text'
                        autoFocus
                        value={degree}
                        onChange={handleDegreeChange}
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
                        label='Grad Year'
                        required
                        variant='outlined'
                        margin='normal'
                        type='date'
                        autoComplete='text'
                        autoFocus
                        value={gradYear}
                        onChange={handleGradYearChange}
                    />
                    <Button onClick={addEd} variant='contained' color='primary' sx={{ margin: '20px' }}>
                        Add School
                    </Button>
                    <Button onClick={handleEducationSubmit} type='submit' variant='contained' color='primary'>
                        Next
                    </Button>
                </Box>
            </form>

            <div>
                <h2>Educations:</h2>
                <ul>
                    {educations.map((exp, index) => (
                        <li key={index}>
                            <p>School: {exp.school}</p>
                            <p>Degree: {exp.degree}</p>
                            <p>Join Year: {exp.joinYear}</p>
                            <p>Grad Year: {exp.gradYear}</p>
                            {/* <p>Description: {exp.desc}</p> */}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Education
