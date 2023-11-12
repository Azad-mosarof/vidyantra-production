import React, { useContext } from 'react'
import './Header.scss'

import {
  Search,
} from "@mui/icons-material";
import FlexBetween from "../../global/FlexBetween";
import {
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import Typography from '@mui/material/Typography';

import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Header() {

  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
  const userId = userInfo ? userInfo.id : null;

  const handleProfileClick = () => {
    navigate(`/user/${userInfo.firstName + '-' + userInfo.lastName}`)
  }

  const handleSearchQuery = (e) => {
    navigate(`/search/${searchQuery}`)
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchQuery();
    }
  };

  const handleSignIn = () => {
    navigate('/signin') 
  }

  const handleSignUp = () => {
    navigate('/signup')
  }

  const handleScroll = () => {
    const offset = window.scrollY
    if(offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`main--header sticky--header`}>
        <div className="header--content">

          <div className="center" onClick={() => navigate('/')}>Vidyantra</div>

          <FlexBetween
            backgroundColor = "#f7f9fa"
            borderRadius = "100px"
            width="70%"
            gap="3rem"
            p="0.1rem 1.5rem"
            border= '1px solid #E5E5E5'
          >
              <InputBase 
                placeholder="Search Anything..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
              <IconButton>
                  <Search
                    onClick={handleSearchQuery}
                  />
              </IconButton>
          </FlexBetween>

          <ul className='left'>
            <li className='show'>Business</li>
            <li className='show'>Technology</li>
            <li className='show'>Services</li>
            <li>

              {!userInfo ?
                <div className="right">
                  <span className='log--in' onClick={handleSignIn}>Log In</span>
                  <span className='sign--up' onClick={handleSignUp}>Sign up</span>
                </div>

                :

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0.5rem',
                    backgroundColor: '#2d2f31',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  onClick={handleProfileClick}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#fff',
                      fontSize: '0.8rem',
                      textAlign: 'left',
                    }}
                  >
                    { 
                      userInfo && userInfo.firstName && userInfo.lastName ?
                      (userInfo.firstName[0].toUpperCase() + userInfo.lastName[0].toUpperCase()) : null}
                  </Typography>

                </Box>
              }
              
            </li>
          </ul>

        </div>
      </header>
    </>
  )
}

export default Header
