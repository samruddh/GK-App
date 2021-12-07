import React from 'react';
import './Navbar.css'
import user from '../Images/user.png'

export default function Navbar() {
    return (
        <div className='nav'>
            <div className='logo'>
                <h2>Genral Knwoladge <i class="far fa-lightbulb"></i></h2>
            </div>
            <div className='user-img'>
                <img src={user} alt='user'/>
            </div>
        </div>
    )
}
