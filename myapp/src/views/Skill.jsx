import React from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

const Skill = () => {
    const navigate = useNavigate()

    const [Skills, setSkills] = useState([''])

    const handleSkillsChange = (event, index) => {
        const newLinks = [...Skills]
        newLinks[index] = event.target.value
        setSkills(newLinks)
    }

    const handleAddSkills = () => {
        setSkills([...Skills, ''])
        localStorage.setItem('skills', JSON.stringify(Skills))
    }

    async function sendData(email, password) {
        try {
            const name = localStorage.getItem('name')
            const email = localStorage.getItem('email')
            const mobileNumber = localStorage.getItem('phone')
            const city = localStorage.getItem('city')
            const address = localStorage.getItem('address')
            const socialMediaLinks = JSON.parse(localStorage.getItem('socialMediaLinks'))
            const educations = JSON.parse(localStorage.getItem('educations'))
            const experiences = JSON.parse(localStorage.getItem('experiences'))
            const skills = Skills

            console.log()
            const response = await axios.post('/api/cv', {
                name,
                email,
                mobileNumber,
                city,
                address,
                socialMediaLinks,
                educations,
                experiences,
                skills,
            })
            navigate('/cv')
        } catch (error) {
            throw error.response.data
        }
    }

    // const handleLogin = async (email, password) => {
    //     try {
    //         const userData = await loginUser(email, password)
    //         if (userData.data.message === 'ok') {
    //             localStorage.setItem('accessToken', userData.headers.getAuthorization())
    //             console.log('Login successful:', userData.headers.getAuthorization())
    //             navigate('/contact')
    //         } else {
    //             console.error('Login failed:', userData.data.message)
    //             setError('No user with those credentials exist')
    //         }
    //     } catch (error) {
    //         console.error('Login failed:', error)
    //         setError(error.message)
    //     }
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            Skills,
        })
        sendData()

        // Send the data to the server
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box display={'flex'} alignItems='center' flexDirection={'column'} marginRight='220px' marginTop={'1px'}>
                {Skills.map((link, index) => (
                    <div key={index}>
                        <TextField
                            label={`Skill ${index + 1}`}
                            variant='outlined'
                            margin='normal'
                            value={link}
                            onChange={(event) => handleSkillsChange(event, index)}
                        />
                    </div>
                ))}
                <Button variant='contained' margin='normal' color='primary' onClick={handleAddSkills}>
                    Add More
                </Button>
            </Box>
            <Button type='submit' variant='contained' color='primary' sx={{ margin: '40px' }}>
                Next
            </Button>
        </form>
    )
}

export default Skill
