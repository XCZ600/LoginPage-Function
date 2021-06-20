import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function Welcome(props) {
    return (
        <div className="welcome">
            <br />
            <h2><b>WELCOME TEST</b></h2>

            <p>You have logged in with the email address as</p>

            <div><h1 className='eColor'>{props.user.email}</h1></div>
            {/* <div><h1 className='eColor'>{this.props.user.password}</h1></div> */}

            <Link to='/'><button className='button'>Logout</button></Link>
        </div>
    )
}