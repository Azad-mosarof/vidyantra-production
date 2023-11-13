import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Template from './Template';
import * as api from '../../utils/Api';
import { useParams } from 'react-router-dom';

/**
 * SearchResults component for displaying search results based on a query.
 */
function SearchResults() {
    const { query } = useParams();
    const [courses, setCourses] = useState([]);

    // Fetch courses based on the search query
    useEffect(() => {
        fetch(`${api.baseUrl + api.searchCourses}/${query}`)
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log(data);
            });
    }, [query]);

    return (
        <Box
            sx={{
                width: '65%',
                mt: '7rem',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                marginLeft: 'auto',
                marginRight: 'auto',
                gap: '1.5rem',
            }}
        >
            {/* Search Results Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: '1rem',
                }}
            >
                Search Results for "{query}"
            </Typography>

            {/* Filters and Result Count */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                {/* Filters */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '1rem',
                    }}
                >
                    {/* Filter Options */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                            color: '#000',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            border: '1px solid #000',
                            alignSelf: 'center',
                            fontSize: '1rem',
                        }}
                    >
                        Filter
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                            color: '#000',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            border: '1px solid #000',
                            alignSelf: 'center',
                            fontSize: '1rem',
                        }}
                    >
                        Sort by Rating
                    </Typography>
                </Box>

                {/* Result Count */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        color: '#000',
                        marginRight: '1rem',
                        alignSelf: 'center',
                        fontSize: '1rem',
                    }}
                >
                    {courses.length} Results
                </Typography>
            </Box>

            {/* Filters Section */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '3rem',
                }}
            >
                {/* Left Sidebar - Ratings Filter */}
                <Box
                    sx={{
                        width: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}
                >
                    {/* Divider */}
                    <Box
                        sx={{
                            width: '100%',
                            height: '1px',
                            backgroundColor: '#777',
                        }}
                    />

                    {/* Ratings Filter Heading */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            color: '#000',
                            marginRight: '1rem',
                        }}
                    >
                        Ratings
                    </Typography>

                    {/* Individual Rating Filters */}
                    {[4.5, 4, 3.5, 3].map((rating, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '0.5rem',
                            }}
                        >
                            {/* Rating Indicator */}
                            <Box
                                sx={{
                                    width: '15px',
                                    height: '15px',
                                    display: 'flex',
                                    borderRadius: '50%',
                                    border: '1px solid #000',
                                    alignSelf: 'center',
                                }}
                            />

                            {/* Star Ratings */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '0.05rem',
                                }}
                            >
                                {[1, 2, 3, 4, 5].map((item, index) => (
                                    <StarIcon
                                        key={index}
                                        sx={{
                                            color: '#b4690e',
                                            width: '15px',
                                            height: '15px',
                                            alignSelf: 'center',
                                        }}
                                    />
                                ))}
                            </Box>

                            {/* Rating Text */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: '400',
                                    color: '#000',
                                    fontSize: '0.9rem',
                                    alignSelf: 'center',
                                }}
                            >
                                {rating} & above
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Right Sidebar - Displaying Course Templates */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '1rem',
                    }}
                >
                    {/* Mapping through courses and rendering Template component */}
                    {courses.map((course, index) => (
                        <Template key={index} course={course} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default SearchResults;
