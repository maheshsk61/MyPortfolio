import './Skills.css'
import React from 'react'
const skills = [
    {
        name: 'HTML 5'
    },
    {
        name: 'CSS 3'
    },
    {
        name: 'Bootstrap'
    },
    {
        name: 'Javascript'
    },
    {
        name: 'ReactJS'
    },
    {
        name: 'Redux'
    },
    {
        name: 'Git & Github'
    }]
export default function Skills() {
    return (
        <div className="Skills" id='skills'>
            <h1 style={{color:'darkgray'}}>Skills</h1>
            {
                skills.map((skill, index) => {
                    return (
                        <div key={index}>
                            <h3>
                                <ul>
                                    <li>{skill.name}</li>
                                </ul>
                            </h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
