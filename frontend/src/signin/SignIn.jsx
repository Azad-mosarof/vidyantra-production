import React from 'react'
import '../signin/SignUp.scss'
import axios from 'axios'
import { storeDummyCourses } from '../utils/DummyData'
import * as api from '../utils/Api'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../utils/Context'
import { useEffect } from 'react'

function SignIn() {

  // useEffect(() => {
  //   storeDummyCourses()
  // }, [])

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setUser, setUserInfo} = useAppContext()

  //save data in local storage
  const saveDataInLocalStorage = (student) => {
    localStorage.setItem('userInfo', JSON.stringify(student));
  }

  //sign in the user
  const signIn = async (e) =>{
      e.preventDefault()
      const data = {
        email: email,
        password: password
      }
      try {
        const response = await axios.post(api.baseUrl+api.signIn, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        if (response.status !== 200) {
          alert(response.data.error); // Access the error message from the response
          console.log(response);
          return;
        }
        setUserInfo(response.data)
        saveDataInLocalStorage(response.data)
        navigate(`/user/${response.data.firstName}-${response.data.lastName}`)
      } catch (error) {
        alert(error);
      }
  }

  return (
    <div className='main-signup-container'>
      <div className='signup--container'>
        <div className="logo" onClick={() => navigate('/')}>Vidyantra</div>
          <div className="signup--content">
              <div className="signup--heading">Log In</div>
              <div className="signup--form">
                  <div className="form--group">
                      <span>E-mail</span>
                      <input 
                        type="text" 
                        value={email} 
                        className='email'
                        onChange={
                            (e) => setEmail(e.target.value)
                        }
                      />
                      <span>Password</span>
                      <input 
                        type="password" 
                        className='password'
                        value={password}
                        onChange={
                            (e) => setPassword(e.target.value)
                        }
                      />
                      <button className='signup--btn' onClick={signIn}>Log In</button>
                  </div>
              </div>
              <p>By signing-in you agree to Vidyantra's Terms and Conditions of Use & Data safety. Please see our Privacy Notice and our Cookies Notice.</p>
          </div>
      </div>
    </div>

  )
}

export default SignIn