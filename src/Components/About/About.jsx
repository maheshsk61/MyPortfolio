import './About.css'
import React from 'react'
export default function About() {
    return (
        <div className='d-flex xl'>
            <div className="About" id="about">
                <h1 className='text-info'>About Me</h1>
                <h2>Hello, Its me Mahesh Babu.</h2>
                <h6>I'm a Frontend Developer with nearly 2 years of experience in developing and enhancing the web applications.</h6>
                <h6>Developed and Enhanced user-friendly web applications by implementing new features and functionalities according to project requirements, resulting in improved user engagement and satisfaction.</h6>
            </div>
            <div className="image">
                {/* https://drive.google.com/file/d/168tPjpeKmODPswdmiIuYDgYYhsW_C91R/view?usp=sharing */}
                <img src="https://drive.google.com/thumbnail?id=168tPjpeKmODPswdmiIuYDgYYhsW_C91R" alt="My_Photo" className='img-fluid' />
            </div>
        </div>
    )
}
