import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from 'react-router-dom'

function Template({key, course}) {

    const navigate = useNavigate()

    //handle course click
    const handleCourseClick = () => {
        navigate(`/course-details/${course.id}`)
    }

  return (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            cursor: 'pointer',
        }}
        onClick={handleCourseClick}
    >
        <Box
            component="img"
            sx={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
            }}
            alt="The house from the offer."
            src={course.thumbnail}
        />

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1.3rem',
                    }}
                >
                    {course.name}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    ₹ {course.discountedPrice}
                </Typography>
            
            </Box>

            <Typography
                variant="body1"
                sx={{
                    fontWeight: '500',
                    fontSize: '1rem',
                    color: '#4c4d4f',
                }}
            >
                {course.description}
            </Typography>
            
            <Typography
                variant="h6"
                sx={{
                    fontWeight: '400',
                    fontSize: '0.9rem',
                    color: '#4c4d4f',
                }}
            >
                {course.instructor}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem',
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        color: '#000',
                        alignSelf: 'center',
                    }}
                >
                    {course.averageRating}
                </Typography>
                
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignSelf: 'center',
                    }}
                >
                    {
                        [1, 2, 3, 4, 5].map((item, index) => (
                            <StarIcon
                                key={index}
                                sx={{
                                    width: '15px',
                                    height: '15px',
                                    color: '#FFC107',
                                    alignSelf: 'center',
                                }}
                            />
                        ))
                    }
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        color: '#4c4d4f',
                        alignSelf: 'center',
                    }}
                >
                    ({course.totalRatings})
                </Typography>

            </Box>

            <Typography
                variant="body1"
                sx={{
                    fontWeight: '400',
                    fontSize: '0.9rem',
                    color: '#4c4d4f',
                }}
            >
                {course.duration}
            </Typography>
        
        </Box>

    </Box>
  )
}

export default Template