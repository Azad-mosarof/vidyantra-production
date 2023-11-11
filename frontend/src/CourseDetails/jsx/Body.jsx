import React from 'react'
import '../style/Body.scss'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import CheckIcon from '@mui/icons-material/Check';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { ArrowDropDownOutlined } from '@mui/icons-material';
import Course from './Course'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as api from '../../utils/Api'

const includes = [
    {
        icon: <VideocamIcon />,
        text: '22.5 hours on-demand video',
    },
    {
        icon: <ArticleIcon />,
        text: '1 article',
    },
    {
        icon: <CloudDownloadIcon />,
        text: '2 downloadable resources',
    },
    {
        icon: <AccessTimeFilledIcon />,
        text: 'Full lifetime access',
    },
    {
        icon: <MobileFriendlyIcon />,
        text: 'Access on mobile and TV',
    },
    {
        icon: <VerifiedUserIcon />,
        text: 'Certificate of completion',
    },
]

const halfIncludesLength = Math.ceil(includes.length / 2);
const leftIncludesItems = includes.slice(0, halfIncludesLength);
const rightIncludesItems = includes.slice(halfIncludesLength);

const renderIncludesItems = (items) =>
    items.map((item, index) => (
        <Box
            key={index}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5rem',
                padding: '0.5rem',
                borderRadius: '5px',
            }}
        >
            {item.icon}

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.9rem',
                    color: '#000',
                    fontWeight: '400',
                }}
            >
                {item.text}
            </Typography>
        </Box>
    ));

const renderItems = (items) =>
    items.map((item, index) => (
        <Box
        key={index}
        sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '0.5rem',
            padding: '0.5rem',
            borderRadius: '5px',
        }}
        >
            <CheckIcon
                sx={{
                    color: '#000',
                    fontSize: '1rem',
                }}
            />

            <Typography
                variant="h7"
                sx={{
                fontSize: '0.9rem',
                color: '#000',
                fontWeight: '400',
            }}
            >
                {item}
            </Typography>
        </Box>
    ));

function Body() {

    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const [learn, setLearn] = useState([]);
    const [requirements, setRequirements] = useState([]);
    const [syllabus, setSyllabus] = useState([]);

    const halfLength = Math.ceil(learn.length / 2);
    const leftItems = learn.slice(0, halfLength);
    const rightItems = learn.slice(halfLength);

    useEffect(() => {
        axios.get(api.baseUrl + api.getCourseById + courseId)
        .then(response => {
            console.log(response.data);
            setCourse(response.data);
            setLearn(response.data.youWillLearn);
            setRequirements(response.data.prerequisites);
            setSyllabus(response.data.syllabus);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);


  return (
    <Box
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            mt: '5rem',
        }}
    >
        <Course 
            course={course}
        />

        <Box
            sx={{
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                backgroundColor: '#2d2f31',
                pt: '2rem',
                pb: '2rem',
            }}
        >
            <Box
                sx={{
                    width: '60%',
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'left',
                    gap: '1rem',
                    margin: 'auto',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: '2rem',
                        alignSelf: 'left',
                    }}
                >
                    {course.name}
                </Typography>

                <Typography
                    variant="h5"
                    sx={{
                        fontSize: '1.2rem',
                        color: '#fff',
                        fontWeight: '400',
                        maxWidth: '700px',
                    }}
                >
                    {course.description}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        gap: '1rem',
                    }}
                >

                    <Typography
                        variant="h7"
                        sx={{
                            fontSize: '0.9rem',
                            color: '#f69c08 ',
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
                        <StarHalfIcon
                            sx={{
                                color: '#FFC107',
                                fontSize: '1rem'
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h7"
                        sx={{
                            fontSize: '0.9rem',
                            color: '#4c80ad',
                            fontWeight: '400',
                        }}
                    >
                        ({course.totalRatings} ratings)
                    </Typography>

                    <Typography
                        variant="h7"
                        sx={{
                            fontSize: '0.9rem',
                            color: '#fff',
                            fontWeight: '400',
                        }}
                    >
                        {course.totalEnrolled} students
                    </Typography>   

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '100%',
                        gap: '1rem',
                    }}
                >
                    <Typography
                        variant="h7"
                        sx={{
                            fontSize: '0.9rem',
                            color: '#fff',
                            fontWeight: '400',
                        }}
                    >
                        Created by
                    </Typography>

                    <Typography
                        variant="h7"
                        sx={{
                            fontSize: '0.9rem',
                            color: '#4c80ad',
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        {course.instructor}
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: '1rem',
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: '0.4rem',
                        }}
                    >
                        <InfoIcon
                            sx={{
                                color: '#fff',
                                fontSize: '1.2rem',
                            }}
                        />

                        <Typography
                            variant="h7"
                            sx={{
                                fontSize: '0.9rem',
                                color: '#fff',
                                fontWeight: '400',
                            }}
                        >
                            Last updated
                        </Typography>

                        <Typography
                            variant="h7"
                            sx={{
                                fontSize: '0.9rem',
                                color: '#fff',
                                fontWeight: '400',
                            }}
                        >
                            10/2023
                        </Typography>

                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: 'fit-content',
                            gap: '0.3rem',
                        }}
                    >
                        <LanguageIcon
                            sx={{
                                color: '#fff',
                                fontSize: '1.2rem',
                                alignSelf: 'center',
                            }}
                        />

                        <Typography
                            variant="h7"
                            sx={{
                                fontSize: '0.9rem',
                                color: '#fff',
                                fontWeight: '400',
                                alignSelf: 'center',
                            }}
                        >
                            {
                                course.languages?.map((language, index) => (
                                    <span key={index}>{
                                        index === course.languages.length - 1 ? `${language}` : `${language}, `
                                    }</span>
                                ))
                            }
                        </Typography>

                    </Box>

                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: '0.2rem',
                        maxWidth: '700px',
                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            width: '100%',
                            gap: '0.4rem',
                        }}
                    >
                        <SubtitlesIcon
                            sx={{
                                color: '#fff',
                                fontSize: '1.2rem',
                            }}
                        />

                        <Typography
                            variant="h7"
                            sx={{
                                fontSize: '0.9rem',
                                color: '#fff',
                                fontWeight: '400',
                            }}
                        >
                            Subtitles
                        </Typography>

                    </Box>

                    <Typography
                        variant="h7"    
                        sx={{
                            fontSize: '0.9rem',
                            color: '#fff',
                            fontWeight: '400',
                            
                        }}
                    >
                        {course.captions?.map((subtitle, index) => (
                            <span key={index}>{
                                index === course.captions.length - 1 ? `${subtitle}` : `${subtitle}, `
                            }</span>
                        ))}
                    </Typography>

                </Box>

            </Box>

        </Box>

        <Box
            sx={{
                width: '100%',
                height: 'fit-content',
                display: 'flex',
                gap: '1rem',
                padding: '1rem',
                pt: '2rem',
                pb: '2rem',
            }}
        >

            <Box
                sx={{
                    width: '60%',
                    height: 'fit-content',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    margin: '2rem auto',
                }}
            >

                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        gap: '1rem',
                        padding: '2rem',
                        maxWidth: '800px',
                        border: '1px solid #e0e0e0',
                    }}
                >

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            color: '#000',
                            fontSize: '1.5rem',
                            alignSelf: 'left',
                        }}
                    >
                        What you'll learn
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: '2rem',
                            width: '100%',
                        }}
                    >

                    <Box 
                        sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            gap: '1rem',
                        }}
                    >

                        <Box>
                            {renderItems(leftItems)}
                        </Box>

                        <Box>
                            {renderItems(rightItems)}
                        </Box>
                            
                    </Box>

                    </Box>

                </Box>

                <Box
                    sx={{
                        width: '100%',
                        height: 'fit-content',
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: 'column',
                        margin: '2rem auto',
                    }}
                >

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                            color: '#000',
                            fontSize: '1.5rem',
                            textAlign: 'left',
                        }}
                    >
                        This course includes
                    </Typography>


                    <Box 
                        sx={{ 
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '2rem',
                        }}
                    >

                        <Box>
                            {renderIncludesItems(leftIncludesItems)}
                        </Box>

                        <Box>
                            {renderIncludesItems(rightIncludesItems)}
                        </Box>
                            
                    </Box>

                </Box>

                {/* for syllabus */}
                <Box
                    sx={{
                        width: '80%',
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                            color: '#000',
                            fontSize: '1.5rem',
                            textAlign: 'left',
                        }}
                    >
                        Syllabus
                    </Typography>

                    <Box
                        sx={{
                            width: '100%',
                            height: 'fit-content',
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '1rem',
                            marginBottom: '2rem',
                        }}
                    >
                        {
                            syllabus.map((section, index) => (
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: 'fit-content',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        border: '1px solid #e0e0e0',
                                        borderBottom: `${index === syllabus.length - 1 ? '1px solid #e0e0e0' : 'none'}`,
                                        padding: '1rem 2rem',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: 'fit-content',
                                            display: 'flex',
                                            gap: '0.5rem',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: '700',
                                                color: '#000',
                                                fontSize: '1.2rem',
                                                textAlign: 'left',
                                                fontFamily: 'sans-serif',
                                            }}
                                        >
                                            {section.topic}
                                        </Typography>
            
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: '400',
                                                color: '#666967',
                                                fontSize: '1rem',
                                                textAlign: 'left',
                                            }}
                                        >
                                            {section.content}
                                        </Typography>
                                    </Box>
        
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: '400',
                                            color: '#666967',
                                            fontSize: '1rem',
                                            textAlign: 'left',
                                            alignSelf: 'center',
                                        }}
                                    >
                                        {section.week} week
                                    </Typography>
                                </Box>
                            ))
                        }
                    </Box>

                </Box>

                {/* for Requirements */}
                <Box
                    sx={{
                        width: '100%',
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                            color: '#000',
                            fontSize: '1.5rem',
                            textAlign: 'left',
                        }}
                    >
                        Requirements
                    </Typography>

                    <Box
                        sx={{
                            height: 'fit-content',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.2rem',
                            marginTop: '1rem',
                            marginBottom: '2rem',
                        }}
                    >
                        {
                            requirements.map((requirement, index) => (
                                <Box
                                    sx={{
                                        height: 'fit-content',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: '0.5rem',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '7px',
                                            height: '7px',
                                            borderRadius: '50%',
                                            backgroundColor: '#666967',
                                        }}
                                    />

                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: '400',
                                            color: '#666967',
                                            fontSize: '1rem',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {requirement}
                                    </Typography>
                                
                                </Box>
                            ))
                        }
                    </Box>
                
                </Box>

                {/* for Description */}
                <Box
                    sx={{
                        width: '100%',
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '700',
                            color: '#000',
                            fontSize: '1.5rem',
                            textAlign: 'left',
                        }}
                    >
                        Description
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: '70%',
                            fontWeight: '400',
                            color: '#393b3d',
                            fontSize: '0.8rem',
                            textAlign: 'left',
                            mt: '1rem',
                        }}
                    >
                        {course.details}
                    </Typography>
                
                </Box>

            </Box>

        </Box>

    </Box>
  )
}

export default Body