import React from 'react'
import { Box } from '@mui/system'
import '../style/CourseCard.scss'
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from 'react-router-dom'

function CourseCard({
    key,
    course
}) {

    const navigate = useNavigate()

    const handleCourseClick = () => {
        navigate(`/course-details/${course.id}`)
    }

  return (
    <Box 
        className="course--card" 
        key={key}
        sx={{
            width: '250px',
            height: '300px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            border: '1px solid #E5E5E5',
            transition: 'all 0.3s ease-in-out',
            cursor: 'pointer',
            pb: '1rem',
            '&:hover': {
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
            }
        }}
        onClick={handleCourseClick}
    >
        <Box 
            className="course--card--body--image"
            sx={{
                width: '100%',
                height: '130px',
                borderRadius: '10px 10px 0px 0px',
                backgroundImage: `url(${course.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        />

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem 1rem 0rem 0.5rem',
                gap: '0.3rem',
                mt: '0.5rem',
                mb: '0.5rem',
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: 2,
                    textOverflow: 'ellipsis',
                }}
            >
                {course.name}
            </Typography>

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.8rem',
                    color: '#777',
                }}
            >
                {course.instructor}
            </Typography>

            <Box className="course--card--rating">

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.9rem',
                        color: '#777',
                        fontWeight: 'bold',
                    }}
                >
                    {course.averageRating}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {Array(4).fill().map((_, i) => (
                        <StarIcon
                            key={i}
                            sx={{
                                color: '#FFC107',
                                fontSize: '1rem'
                            }}
                        />
                    ))}
                    <StarIcon
                        sx={{
                            color: '#000',
                            fontSize: '1rem'
                        }}
                    />
                </Box>

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.9rem',
                        color: '#777',
                        fontWeight: '400',
                    }}
                >
                    ({course.totalRatings})
                </Typography>

            </Box>

            <Box className="course--card--price">
                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.9rem',
                        color: '#777',
                        fontWeight: 'bold',
                    }}
                >
                    ₹ {course.discountedPrice}
                </Typography>

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.9rem',
                        color: '#777',
                        fontWeight: '400',
                        textDecoration: 'line-through',
                    }}
                >
                    ₹ {course.price}
                </Typography>
            </Box>
        </Box>

    </Box>
  )
}

export default CourseCard