import React from 'react';
import './Navbar.css';
export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-md p-2' style={{backgroundColor:'gray'}}>
            <a href='/' style={{ textDecoration: 'none', fontSize: '25px'}} className='text-dark'>Portfolio</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navid'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className="collapse navbar-collapse" id='navid'>
                <ul className='navbar-nav text-decoration-none text-dark fs-5 font-weight-bold'>
                    <li className='nav-item'>
                        <a href='#home' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' className='nav-link'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills' className='nav-link'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#resume' className='nav-link'>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' className='nav-link'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#github" className='nav-link'>Github</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' className='nav-link'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
