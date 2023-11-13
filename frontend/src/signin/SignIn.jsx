import React from 'react';
import '../signin/SignUp.scss';
import axios from 'axios';
import { storeDummyCourses } from '../utils/DummyData';
import * as api from '../utils/Api';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../utils/Context';
import { useEffect } from 'react';

/**
 * SignIn component for user login.
 * @returns {JSX.Element} The rendered SignIn component.
 */
function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser, setUserInfo } = useAppContext();

    /**
     * Save user information in local storage.
     * @param {Object} student - User information to be saved.
     */
    const saveDataInLocalStorage = (student) => {
        localStorage.setItem('userInfo', JSON.stringify(student));
    };

    /**
     * Sign in the user.
     * @param {Event} e - The click event.
     */
    const signIn = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };
        try {
            const response = await axios.post(api.baseUrl + api.signIn, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status !== 200) {
                alert(response.data.error); // Access the error message from the response
                console.log(response);
                return;
            }
            setUserInfo(response.data);
            saveDataInLocalStorage(response.data);
            navigate(`/user/${response.data.firstName}-${response.data.lastName}`);
        } catch (error) {
            alert(error);
        }
    };

    // Uncomment the following code if you want to store dummy courses on component mount
    // useEffect(() => {
    //   storeDummyCourses()
    // }, [])

    return (
        <div className='main-signup-container'>
            <div className='signup--container'>
                <div className='logo' onClick={() => navigate('/')}>
                    Vidyantra
                </div>
                <div className='signup--content'>
                    <div className='signup--heading'>Log In</div>
                    <div className='signup--form'>
                        <div className='form--group'>
                            <span>E-mail</span>
                            <input
                                type='text'
                                value={email}
                                className='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span>Password</span>
                            <input
                                type='password'
                                className='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='signup--btn' onClick={signIn}>
                                Log In
                            </button>
                        </div>
                    </div>
                    <p>
                        By signing-in you agree to Vidyantra's Terms and Conditions of Use & Data safety. Please see our
                        Privacy Notice and our Cookies Notice.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
