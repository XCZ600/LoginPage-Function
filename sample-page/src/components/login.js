import React, { useState } from 'react'
import '../App.css';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        const updatedUser = { ...user };
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;
        setUser(updatedUser);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.logFunc(user);
        setRedirect(!redirect);
    }

    // render
    if (redirect) {
        return (<Redirect to="/welcome" />)
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2><b>LOGIN FORM TEST</b></h2>
                <div>
                    <label className='eLabel'>EMAIL</label>
                    <br />
                    <input type="text" className="eInput" name="email" onChange={handleChange} value={user.email}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                </div>
                <div>
                    <label className='pLabel'>PASSWORD</label>
                    <br />
                    <input type="password" className="pInput" name="password" onChange={handleChange} value={user.password}
                        minlength="10" required />
                </div>
                <br />

                <button className='button'>Login</button>

            </form>
        </div>
    )
}