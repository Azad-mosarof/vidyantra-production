import React from 'react'
import {Box} from '@mui/system'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/base'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import * as api from '../../utils/Api'
import axios from 'axios'
import { useState } from 'react'

function Course({course}) {

    const handleBuyNow = async() => {

        const userInfoString = localStorage.getItem('userInfo');
        const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
        const userId = userInfo ? userInfo.id : null;

        const data = {
            courseId: course.id,
            studentId: userId,
        }

        console.log(data)

        try{
            const response = await axios.post(api.baseUrl+api.buyCourse, data, {
                headers: {
                  'Content-Type': 'application/json',
                },
            });
            if(response.status !== 200){
                alert(response.data.error)
                return
            }
            alert('Course bought successfully')
        }
        catch(error){
            alert(error)
        }
    }
    
  return (
    <Box
        sx={{
            width: '20rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'absolute',
            right: '18rem',
            top: '7rem',
            backgroundColor: '#fff',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
        }}
    >
        <Box 
            component="img"
            sx={{
                width: '100%',
                height: '180px',
                borderBottom: '1px solid #eee',
            }}
            src={course.thumbnail}
        />

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.2rem',
                mb: '1rem',
            }}
        >

            <Typography
                variant="h3"
                sx={{
                    fontWeight: '600',
                    fontSize: '1.3rem',
                    color: '#000',
                    textAlign: 'left',
                }}
            >
                Subscribe to Vidyantra’s top courses
            </Typography>

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.8rem',
                    color: '#777',
                    textAlign: 'left',
                }}
            >
                Get this course, plus 11,000+ of our top-rated courses, with Personal Plan. <Link to="/">See plans</Link>
            </Typography>

            <Typography
                variant="h1"
                sx={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    mt: '0.5rem',
                    color: '#fff',
                    textAlign: 'left',
                    backgroundColor: '#a435f0',
                    textAlign: 'center',
                    padding: '0.8rem',
                    "&:hover": {
                        cursor: 'pointer',
                    },
                }}
            >
                Subscribe now
            </Typography>

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.8rem',
                    color: '#777',
                }}
            >
                Starting at ₹ 499/month
            </Typography>

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.8rem',
                    color: '#777',
                }}
            >
                Cancel anytime
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#777',
                    }}
                />

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.8rem',
                        color: '#777',
                    }}
                >
                    or
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#777',
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem',
                    mt: '0.5rem',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '1rem',
                        color: '#000',
                        fontWeight: '700',
                        alignSelf: 'center',
                    }}
                >
                    ₹ {course.discountedPrice}
                </Typography>

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '1rem',
                        color: '#777',
                        textDecoration: 'line-through',
                        alignSelf: 'center',
                    }}
                >
                    ₹ {course.price}
                </Typography>

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.9rem',
                        color: '#777',
                        alignSelf: 'center',
                    }}
                >
                    (₹ {parseInt(((course.price - course.discountedPrice)/course.price)*100)}% off)
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.3rem',
                }}
            >
                <AccessAlarmsIcon
                    sx={{
                        color: '#b32d0f',
                        fontSize: '1rem',
                        alignSelf: 'center',
                    }}
                />

                <Typography 
                    sx={{
                        fontWeight:700, 
                        fontSize: '0.9rem',
                        color: '#b32d0f',
                        alignSelf: 'center',
                    }}
                >
                    1 hour 30 minutes
                </Typography> 

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.8rem',
                        color: '#b32d0f',
                        alignSelf: 'center',
                    }}
                >
                    left at this price!
                </Typography>
            </Box>

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.9rem',
                    color: '#000',
                    border: '1px solid #000',
                    padding: '0.6rem',
                    fontWeight: '700',
                    mt: '0.5rem',
                    "&:hover": {
                        cursor: 'pointer',
                    },
                }}
                onClick={() => {handleBuyNow()}}
            >
                Enroll now
            </Typography>

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.8rem',
                    color: '#777',
                    mt: '0.3rem',
                }}
            >
                30-Day Money-Back Guarantee
            </Typography>

            <Typography
                variant="h7"
                sx={{
                    fontSize: '0.8rem',
                    color: '#777',
                }}
            >
                Full Lifetime Access
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    mt: '0.5rem',
                }}
            >
                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.8rem',
                        color: '#000',
                        textDecoration: 'underline',
                        fontWeight: '700',
                        "&:hover": {
                            cursor: 'pointer',
                        },
                    }}
                >
                    Share
                </Typography>

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.8rem',
                        color: '#000',
                        textDecoration: 'underline',
                        fontWeight: '700',
                        "&:hover": {
                            cursor: 'pointer',
                        },
                    }}
                >
                    Gift this course
                </Typography>

                <Typography
                    variant="h7"
                    sx={{
                        fontSize: '0.8rem',
                        color: '#000',
                        textDecoration: 'underline',
                        fontWeight: '700',
                        "&:hover": {
                            cursor: 'pointer',
                        },
                    }}
                >
                    Apply coupon
                </Typography>
            </Box>
        </Box>

    </Box>
  )
}

export default Course