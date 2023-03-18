import React from 'react'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [socialMediaLinks, setSocialMediaLinks] = useState([''])

    const handleNameChange = (event) => {
        setName(event.target.value)
        localStorage.setItem('name', JSON.stringify(name))
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
        localStorage.setItem('phone', JSON.stringify(phone))
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        localStorage.setItem('email', JSON.stringify(email))
    }

    const handleCityChange = (event) => {
        setCity(event.target.value)
        localStorage.setItem('city', JSON.stringify(city))
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
        localStorage.setItem('address', JSON.stringify(address))
    }

    const handleSocialMediaLinkChange = (event, index) => {
        const newLinks = [...socialMediaLinks]
        newLinks[index] = event.target.value
        setSocialMediaLinks(newLinks)
    }

    const handleAddSocialMediaLink = () => {
        setSocialMediaLinks([...socialMediaLinks, ''])
        localStorage.setItem('socialMediaLinks', JSON.stringify(socialMediaLinks))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            name,
            phone,
            email,
            city,
            address,
            socialMediaLinks,
        }
        console.log(userData)
        navigate('/education')
        // Send the data to the server
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box display={'flex'} alignItems='center' flexDirection={'column'} marginRight='220px' marginTop={'1px'}>
                <TextField
                    label='Name'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={name}
                    onChange={handleNameChange}
                />
                <TextField
                    label='Mobile Number'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <TextField
                    label='Email'
                    required
                    variant='outlined'
                    margin='normal'
                    type='email'
                    autoComplete='email'
                    autoFocus
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    label='City'
                    required
                    variant='outlined'
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={city}
                    onChange={handleCityChange}
                />
                <TextField
                    label='Address'
                    variant='outlined'
                    required
                    margin='normal'
                    type='text'
                    autoComplete='text'
                    autoFocus
                    value={address}
                    onChange={handleAddressChange}
                />
                {socialMediaLinks.map((link, index) => (
                    <div key={index}>
                        <TextField
                            label={`Social Media Link ${index + 1}`}
                            variant='outlined'
                            margin='normal'
                            value={link}
                            onChange={(event) => handleSocialMediaLinkChange(event, index)}
                        />
                    </div>
                ))}
                <Button variant='contained' margin='normal' color='primary' onClick={handleAddSocialMediaLink}>
                    Add Link
                </Button>
            </Box>
            <Button type='submit' variant='contained' color='primary' sx={{ margin: '40px' }}>
                Next
            </Button>
        </form>
    )
}

export default Contact
