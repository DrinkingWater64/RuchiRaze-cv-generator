import React from 'react'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'

const contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [socialMediaLinks, setSocialMediaLinks] = useState([''])

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleSocialMediaLinkChange = (event, index) => {
        const newLinks = [...socialMediaLinks]
        newLinks[index] = event.target.value
        setSocialMediaLinks(newLinks)
    }

    const handleAddSocialMediaLink = () => {
        setSocialMediaLinks([...socialMediaLinks, ''])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            name,
            phone,
            email,
            city,
            address,
            socialMediaLinks,
        })
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
                Submit
            </Button>
        </form>
    )
}

export default contact
