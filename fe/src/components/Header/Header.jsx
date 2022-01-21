import './header.scss'
import React from 'react'
// import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <a href='/' className='logo-container'><img className='logo-tex' src='/images/logo.PNG' alt='logo'/></a >
            <span>Log-In</span>
        </header>
    )
}
