import React from 'react'
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

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            Skills,
        })
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
