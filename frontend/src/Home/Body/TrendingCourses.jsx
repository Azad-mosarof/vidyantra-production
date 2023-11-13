import { Button } from '@mui/base';
import React, { useEffect, useState } from 'react';
import './TrendingCourses.scss';
import CourseCard from '../Components/jsx/CourseCard';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as api from '../../utils/Api.jsx';
import axios from 'axios';

const topCategories = [
  'Python',
  'JavaScript',
  'IT & Software',
  'Personal Development',
  'Design',
  'Marketing',
  'Photography',
  'Health & Fitness',
  'Music',
];

/**
 * TrendingCourses component to display trending courses.
 * @returns {JSX.Element} Trending courses component
 */
function TrendingCourses() {
  const [startIndex, setStartIndex] = useState(0);
  const [courses, setCourses] = useState([]);

  // Make an API call to get all trending courses
  useEffect(() => {
    axios.get(api.baseUrl + api.getCourses)
      .then(response => {
        console.log(response.data);
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, []);

  const handleForwardClick = () => {
    const newIndex = startIndex + 4;
    setStartIndex(newIndex < courses.length ? newIndex : 0);
  };

  const handleBackwardClick = () => {
    const newIndex = startIndex - 4;
    setStartIndex(newIndex >= 0 ? newIndex : courses.length - 4);
  };

  // Slice the array to get the current set of items to display
  const itemsToDisplay = courses.slice(startIndex, startIndex + 4);

  return (
    <div className='trending--courses'>

      <Typography
        variant="h7"
        sx={{
          fontSize: '2.3rem',
          color: '#000',
          fontWeight: 'bold',
          fontFamily: 'Poppins',
        }}
      >
        A broad selection of courses
      </Typography>

      <Typography
        variant="h7"
        sx={{
          fontSize: '0.9rem',
          color: '#777',
          fontWeight: '600',
          mt: '-1rem',
        }}
      >
        Choose from 155,000 online video courses with new additions published every month
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          mt: 2,
          mb: 2,
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {topCategories.map((category, index) => (
          <Typography
            key={index}
            variant="h7"
            sx={{
              fontSize: '0.9rem',
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
              '&:hover': {
                color: '#000',
              }
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mb: 2,
          mt: '-2rem',
          justifyContent: 'space-between',
          border: '1px solid #e0e0e0',
          padding: '2rem',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            color: '#000',
          }}
        >
          Expand your career opportunities with Python
        </Typography>

        <Typography
          sx={{
            mt: '1rem',
            mb: '1rem',
            fontSize: '1rem',
            color: '#525252',
            maxWidth: '70%',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            WebkitLineClamp: 3,
            textOverflow: 'ellipsis',
          }}
        >
          Whether you work in machine learning or finance,
          or are pursuing a career in web development or data science, Python is one of the most important skills you can
          learn. Python's simple syntax is especially suited for desktop, web, and business applications.
          Python's design philosophy emphasizes readability and usability. Python was developed upon the premise that there
          should be only one way (and preferably one obvious way) to do things, a philosophy that has resulted in a strict
          level of code standardization. The core programming language is quite small and the standard library is also large.
          In fact, Python's large library is one of its greatest benefits, providing a variety of different tools for programmers
          suited for many different tasks.
        </Typography>

        <Typography
          component="div"
          sx={{
            width: 'fit-content',
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: '#15a33b',
            color: 'white',
            mt: '1rem',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#e50914',
              color: 'white',
            }
          }}
        >
          Explore Python
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            overflow: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '50%',
              width: 'fit-content',
              height: 'fit-content',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1,
            }}
          >
            <ArrowBackIosIcon
              sx={{
                fontSize: '1.5rem',
                color: '#8995a1',
                cursor: 'pointer',
              }}
              onClick={handleBackwardClick}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '4rem',
              gap: '2rem',
              width: '100%',
              overflowX: 'auto',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {
              itemsToDisplay.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                />
              ))
            }
          </Box>

          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '50%',
              width: 'fit-content',
              height: 'fit-content',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                fontSize: '1.5rem',
                color: '#8995a1',
                cursor: 'pointer',
              }}
              onClick={handleForwardClick}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: '4rem',
          gap: '2rem',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.7rem',
            fontWeight: 'bold',
            mr: 1,
          }}
        >
          Learners are viewing
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            overflowX: 'auto',
            width: '100%',
            overflowY: 'hidden',
          }}
        >
          {courses.map((_, index) => (
            <CourseCard
              key={index}
              course={courses[index]}
            />
          ))}
        </Box>

      </Box>

    </div>
  );
}

export default TrendingCourses;
