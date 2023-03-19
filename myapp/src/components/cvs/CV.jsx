import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './cv1.css'

function CV() {
    const [name, setName] = useState(JSON.parse(localStorage.getItem('name')))
    const [phone, setPhone] = useState(JSON.parse(localStorage.getItem('email')))
    const [email, setEmail] = useState(JSON.parse(localStorage.getItem('phone')))
    const [city, setCity] = useState(JSON.parse(localStorage.getItem('city')))
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem('address')))
    const [socialMediaLinks, setSocialMediaLinks] = useState(JSON.parse(localStorage.getItem('socialMediaLinks')))
    const [educations, setEducations] = useState(JSON.parse(localStorage.getItem('educations')))
    const [experiences, setExperiences] = useState(JSON.parse(localStorage.getItem('experiences')))
    const [Skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')))

    useEffect(() => {
        // const token = localStorage.getItem("accessToken").split('.')
    }, [])
    return (
        <div className='parent'>
            <div className='childleft'>
                <p className='title'>{name}</p>
                <div className='segment'>
                    <p className='segmentTitile'>Personal Information</p>
                </div>
                <div className='infoBody'>
                    <p className='infoHead'>Phone</p>
                    <p className='info'>0123456789010</p>
                </div>
                <div className='infoBody'>
                    <p className='infoHead'>Email</p>
                    <p className='info'>tzazzzzz@gamil.com</p>
                </div>
                <div className='infoBody'>
                    <p className='infoHead'>LinkedIn</p>
                    <p className='info'>somewebsite.com</p>
                </div>

                <div className='segment'>
                    <p className='segmentTitile'>Skills</p>
                </div>
                <ul className='skillList'>
                    <li>
                        <p className='infoHead'>C++</p>
                    </li>
                    <li>
                        <p className='infoHead'>C#</p>
                    </li>
                    <li>
                        <p className='infoHead'>Python</p>
                    </li>
                </ul>
            </div>

            <div className='childRight'>
                <p className='grouphead'>Education</p>
                <div className='subgroup'>
                    <p className='subgrouphead'>Islamic University of Technology</p>
                    <p className='subgrouphead'>BSc in SWE</p>
                    <p className='subgrouphead'>Graduation: March 2024</p>
                </div>
                <div className='subgroup'>
                    <p className='subgrouphead'>Islamic University of Technology</p>
                    <p className='subgrouphead'>MSc in SWE</p>
                    <p className='subgrouphead'>Graduation: March 2026</p>
                </div>

                <p className='grouphead'>Experience</p>
                <div className='subgroup'>
                    <p className='subgrouphead'>Software Engineering</p>
                    <p className='subgrouphead'>Gogol Inc</p>
                    <p className='subgrouphead'>2028-2029</p>
                    <p className='subgrouphead'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum fugiat veniam aliquam nobis, rerum, consectetur
                        recusandae natus veritatis voluptas eveniet maiores vitae debitis deserunt ea sit expedita vel nihil.
                    </p>
                </div>
                <div className='subgroup'>
                    <p className='subgrouphead'>QA Tester</p>
                    <p className='subgrouphead'>Mango Inc</p>
                    <p className='subgrouphead'>2029-current</p>
                    <p className='subgrouphead'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, esse autem. Perspiciatis molestias fugit nobis obcaecati
                        minus tempore qui voluptatibus dolorem quia pariatur, aperiam exercitationem voluptatem nostrum quaerat debitis! Excepturi.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CV
