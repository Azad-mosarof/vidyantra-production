import React from 'react';
import './Signup.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as constants from '../utils/Constants';
import { useAppContext } from '../utils/Context';
import axios from 'axios';
import * as api from '../utils/Api';

/**
 * Signup component for user registration.
 * @returns {JSX.Element} The rendered Signup component.
 */
function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    /**
     * Validate password.
     * @param {string} password - The password to be validated.
     * @returns {boolean} True if password is valid, otherwise false.
     */
    const validatePassword = (password) => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return re.test(password) && password.length >= 6;
    };

    /**
     * Validate email.
     * @param {string} email - The email to be validated.
     * @returns {boolean} True if email is valid, otherwise false.
     */
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    /**
     * Validate phone number.
     * @param {string} phone - The phone number to be validated.
     * @returns {boolean} True if phone number is valid, otherwise false.
     */
    const validatePhone = (phone) => {
        var re = /^\d{10}$/;
        return re.test(phone);
    };

    /**
     * Check input fields for validation.
     * @returns {boolean} True if all input fields are valid, otherwise false.
     */
    const checkInputFields = () => {
        if (firstName === '') {
            alert('Please enter first name');
            return false;
        } else if (lastName === '') {
            alert('Please enter last name');
            return false;
        } else if (email === '' || !validateEmail(email)) {
            alert('Please enter valid email');
            return false;
        } else if (phone === '' || !validatePhone(phone)) {
            alert('Please enter valid phone number');
            return false;
        } else if (password === '' || !validatePassword(password)) {
            alert('Please enter valid password. Password must contain 6 characters, 1 uppercase, 1 lowercase, and 1 number');
            return false;
        }
        return true;
    };

    /**
     * Create user account by making an API call.
     */
    const createAccount = async () => {
        try {
            if (!checkInputFields()) return;
            const student = {
                id: constants.generateId(),
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password: password,
            };
            const response = await axios.post(api.baseUrl + api.newAccount, student, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status !== 200) {
                throw new Error(response.data.message);
            }
            console.log(response.data);
            localStorage.setItem('userInfo', JSON.stringify(student));
            setEmail('');
            setPassword('');
            alert('Account created successfully');
            navigate(`/user/${response.data.firstName}-${response.data.lastName}`);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className='main-signup-container'>
            <div className='signup--container'>
                <div className='logo' onClick={() => navigate('/')}>
                    Vidyantra
                </div>
                <div className='signup--content'>
                    <div className='signup--heading'>Sign Up</div>
                    <div className='signup--form'>
                        <div className='form--group'>
                            <span>First Name</span>
                            <input
                                type='text'
                                className='firstName'
                                placeholder='Enter first name'
                                onChange={(e) => setFirstName(e.target.value)}
                            />

                            <span>Last Name</span>
                            <input
                                type='text'
                                className='lastName'
                                placeholder='Enter last name'
                                onChange={(e) => setLastName(e.target.value)}
                            />

                            <span>Phone</span>
                            <input
                                type='text'
                                className='phone'
                                placeholder='Enter phone number'
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <span>E-mail</span>
                            <input
                                type='text'
                                value={email}
                                className='email'
                                placeholder='Enter email'
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <span>Password</span>
                            <input
                                type='password'
                                className='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='signup--btn' onClick={createAccount}>
                                Create Account
                            </button>
                        </div>
                    </div>
                    <p>
                        By creating an account, you agree to Vidyantra's Terms and Conditions of Use & Data safety. Please see our Privacy Notice and our Cookies Notice.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
