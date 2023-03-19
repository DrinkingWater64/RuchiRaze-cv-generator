import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function LoginComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    //api calls

    async function loginUser(email, password) {
        try {
            const response = await axios.post('/api/auth/signup', {
                email: email,
                password: password,
            })
            return response
        } catch (error) {
            throw error.response.data
        }
    }

    const handleLogin = async (email, password) => {
        try {
            const userData = await loginUser(email, password)
            if (userData.data.message === 'ok') {
                localStorage.setItem('accessToken', userData.headers.getAuthorization())
                console.log('Login successful:', userData.headers.getAuthorization())
                navigate('/contact')
            } else {
                console.error('Login failed:', userData.data.message)
                setError('No user with those credentials exist')
            }
        } catch (error) {
            console.error('Login failed:', error)
            setError(error.message)
        }
    }

    const validatePassword = (password) => {
        // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        // return passwordRegex.test(password);
        return true
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validatePassword(password)) {
            // console.log('Login successful')
            handleLogin(email, password)
        } else {
            console.error('Password Should be ')
            setError('Password Should Be at least 8 Characters, must contain at least 1 uppercase, 1 lowercase, 1 digit')
        }
    }

    return (
        <Box display='flex' flexDirection={'column'} justifyContent='center' alignItems='center' height='90vh'>
            <form onSubmit={handleSubmit}>
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography variant='h4' gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        label='Email Address'
                        name='email'
                        type='email'
                        autoComplete='email'
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        label='Password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button type='submit' variant='contained' color='primary' fullWidth>
                        Register
                    </Button>
                </Box>
            </form>
            <div></div>

            {error && (
                <Typography color='error' variant='body2' gutterBottom>
                    {error}
                </Typography>
            )}
        </Box>
    )
}

export default LoginComponent
