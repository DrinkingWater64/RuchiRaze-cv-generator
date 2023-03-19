import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { PDFExport } from '@progress/kendo-react-pdf'
import { Button } from '@mui/material'

import './cv1.css'
function parseJwt(token) {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
            })
            .join('')
    )

    return JSON.parse(jsonPayload)
}

function CV() {
    const [name, setName] = useState(JSON.parse(localStorage.getItem('name')) || [])
    const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('phone')) || [])
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('email')) || [])
    const [city, setCity] = useState(JSON.parse(localStorage.getItem('city')) || [])
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('address')) || [])
    const [socialMediaLinks, setSocialMediaLinks] = useState(JSON.parse(localStorage.getItem('socialMediaLinks')) || [])
    const [educations, setEducations] = useState(JSON.parse(localStorage.getItem('educations')) || [])
    const [experiences, setExperiences] = useState(JSON.parse(localStorage.getItem('experiences')) || [])
    const [Skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')) || [])

    useEffect(() => {
        try {
            const { email } = parseJwt(localStorage.getItem('accessToken'))
        } catch {}
        console.log(email)
    }, [])

    let pdfExportComponent

    const handleExport = () => {
        pdfExportComponent.save()
    }

    return (
        <div>
            <Button sx={{ float: 'right' }} onClick={handleExport} variant='contained'>
                Export
            </Button>
            <PDFExport fileName='CV.pdf' paperSize='A4' scale={0.75} ref={(component) => (pdfExportComponent = component)}>
                <div className='parent'>
                    <div className='childleft'>
                        <p className='title'>{name}</p>
                        <div className='segment'>
                            <p className='segmentTitile'>Personal Information</p>
                        </div>
                        <div className='infoBody'>
                            <p className='infoHead'>Phone</p>
                            <p className='info'>{phone}</p>
                        </div>
                        <div className='infoBody'>
                            <p className='infoHead'>Email</p>
                            <p className='info'>{email}</p>
                        </div>
                        <div className='infoBody'>
                            <p className='infoHead'>Links</p>
                            {socialMediaLinks.map((link) => (
                                <p className='info'>{link}</p>
                            ))}
                        </div>

                        <div className='segment'>
                            <p className='segmentTitile'>Skills</p>
                        </div>
                        <ul className='skillList'>
                            {Skills.map((skill) => (
                                <li>
                                    <p className='infoHead'>{skill}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='childRight'>
                        <p className='grouphead'>Education</p>
                        {educations.map((ed) => (
                            <div className='subgroup'>
                                <p className='subgrouphead'>{ed.school}</p>
                                <p className='subgrouphead'>{ed.degree}</p>
                                <p className='subgrouphead'>Entrence: {ed.joinYear}</p>
                                <p className='subgrouphead'>Graduation: {ed.gradYear}</p>
                            </div>
                        ))}

                        <p className='grouphead'>Experience</p>

                        {experiences.map((exp) => (
                            <div className='subgroup'>
                                <p className='subgrouphead'>{exp.jobTitle}</p>
                                <p className='subgrouphead'>{exp.company}</p>
                                <p className='subgrouphead'>
                                    {exp.joinYear}-{exp.leaveYear}
                                </p>
                                <p className='subgrouphead'>{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </PDFExport>
        </div>
    )
}

export default CV
