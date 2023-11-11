import React from 'react'
import './Dashboard.scss'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import Header from '../Home/Header/Header';
import CourseCard from '../Home/Components/jsx/CourseCard';
import Footer from '../Home/Footer/Footer';
import axios from 'axios';
import * as api from '../utils/Api'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const enrolledCourses = [];

function Dashboard() {

  const navigate = useNavigate();
  
  const [courses, setCourses] = React.useState([]);
  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  const userId = userInfo ? userInfo.id : null;

  const handleSignOut = () => {
    localStorage.removeItem('userInfo')
    navigate('/')
  }

  useEffect(() => {
    axios.get(api.baseUrl + api.getAllEnrolledCourses+`/${userId}`)
    .then(response => {
        console.log(response.data);
        setCourses(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Header/>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '3rem',
          backgroundColor: '#2d2f31',
          mt: '5rem',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: '60%',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: '2.2rem',
            textAlign: 'left',
            ml: 'auto',
            mr: 'auto',
            fontFamily: 'Poppins',
          }}
        >
          Azad Mosarof
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: '#fff',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '55%',
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'left',
            }}
          >

            <Box
              sx={{
                width: '8rem',
                height: '8rem',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: '#2d2f31',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  color: '#fff',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                AM
              </Typography>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: '400',
                color: '#000',
                fontSize: '1rem',
                textAlign: 'left',
                alignSelf: 'center',
                "&:hover": {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                },
              }}
              onClick={handleSignOut}
            >
              SignOut
            </Typography>

          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          backgroundColor: '#f7f9fa',
          alignItems: 'center',
        }}
      >

        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            color: '#000',
            fontSize: '1.2rem',
            textAlign: 'center',
            alignSelf: 'center',
          }}
        >
          Courses you're enrolled in
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
          }}
        >

          {
            courses.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
              />
            ))
          }
        
        </Box>

      </Box>

      <Footer/>

    </Box>
  )
}

export default Dashboard