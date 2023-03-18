import * as React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
// import About from './About';
import Templates from './components/Templates'
import Footer from './Footer'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import Main from './components/Main'
import DefaultHome from './DefaultHome'

import Contact from './views/Contact'
import Education from './views/Education'
import Experience from './views/Experienc'
import Skill from './views/Skill'
import LoginComponent from './views/Login'

function App() {
    return (
        <BrowserRouter>
            <nav>
                <div className='container'>
                    <Link className='logo' to='/'>
                        Razeme
                    </Link>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        {/* <li>
        <Link to="/about">About</Link>
      </li> */}
                        <li>
                            <Link Link to='/templates'>
                                Templates
                            </Link>
                        </li>
                        <li>
                            <Link Link to='/contact'>
                                Create Resume
                            </Link>
                        </li>
                    </ul>
                    <button className='login-btn'>Login</button>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path='/templates' element={<Templates />} />
                <Route path='/contact' element={<DefaultHome route={<Contact />} />} />
                <Route path='/education' element={<DefaultHome route={<Education />} />} />
                <Route path='/experience' element={<DefaultHome route={<Experience />} />} />
                <Route path='/skill' element={<DefaultHome route={<Skill />} />} />
                <Route path='/login' element={<LoginComponent />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App
