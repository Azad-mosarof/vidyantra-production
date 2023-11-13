import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

/**
 * Template component for rendering course details.
 * @param {Object} props - Component properties.
 * @param {string} props.key - React key (Note: Using 'key' as a prop is not recommended).
 * @param {Object} props.course - Course details object.
 */
function Template({ key, course }) {
    const navigate = useNavigate();

    /**
     * Handles the click event on a course, navigates to the course details page.
     */
    const handleCourseClick = () => {
        navigate(`/course-details/${course.id}`);
    };

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
            {/* Course Thumbnail */}
            <Box
                component="img"
                sx={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                }}
                alt="Course Thumbnail"
                src={course.thumbnail}
            />

            {/* Course Details */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                }}
            >
                {/* Course Name and Discounted Price */}
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

                {/* Course Description */}
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

                {/* Instructor */}
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

                {/* Average Rating and Total Ratings */}
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

                    {/* Star Ratings */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignSelf: 'center',
                        }}
                    >
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <StarIcon
                                key={index}
                                sx={{
                                    width: '15px',
                                    height: '15px',
                                    color: '#FFC107',
                                    alignSelf: 'center',
                                }}
                            />
                        ))}
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

                {/* Course Duration */}
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
    );
}

export default Template;