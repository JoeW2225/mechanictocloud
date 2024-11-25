'use client'
import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/system';
import { Grow, Box } from '@mui/material';
import homeTheme from '@/app/styles/homeTheme';
import HistoryIcon from '@mui/icons-material/History';
import TodayIcon from '@mui/icons-material/Today';
import FastForwardIcon from '@mui/icons-material/FastForward';



const aboutPaper = (
// MUI media-queries see README, or MUI breakpoints doc
    
        <ThemeProvider theme={homeTheme}>
                
                <Paper
                    elevation={24}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: {
                            xs: 'column',
                        },
                        margin: 1,
                        padding: 2,
                        // Responsive width:
                        width: {
                        xs: 'auto',
                        sm: 380, 
                        md: 480, 
                        },
                        // Responsive height:
                        height: {
                        xs: 'auto',
                        sm: 220,
                        md: 250,
                        },
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        // Responsive font size for the title:
                        fontSize: {
                        xs: 24,
                        sm: 26,
                        md: 30,
                        },
                        color: 'rgb(var(--foreground))',
                        background: 'rgba(255, 255, 255, 0.80)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        }}>
                            About
                <div>
                <div>
                    <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: 3,
                            marginBottom: {
                                xs: 1,
                            },
                            // Responsive gap:
                            gap: {
                                xs: 1,
                                sm: 1.5,
                                md: 2,
                            },
                            width: {
                                xs: 260,
                                sm: 320,
                                md: 400,
                            },
                            background: 'none',
                            boxShadow: 'none',
                            color: 'rgb(var(--textColorLight))',
                            fontSize: {
                                xs: 14,
                                sm: 15,
                                md: 16,
                            },
                            }}>
                            <HistoryIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> The Past
                        </Paper>

                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: {
                                xs: 1,
                            },
                            // Responsive gap:
                            gap: {
                                xs: 1,
                                sm: 1.5,
                                md: 2,
                            },
                            width: {
                                xs: 260,
                                sm: 320,
                                md: 400,
                            },
                            background: 'none',
                            boxShadow: 'none',
                            color: 'rgb(var(--textColorLight))',
                            fontSize: {
                                xs: 14,
                                sm: 15,
                                md: 16,
                            },
                            }}>
                            <TodayIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> The Present
                            </Paper>
                        </div>
                        <div>
                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: {
                                xs: 1,
                            },
                            gap: {
                                xs: 1,
                                sm: 1.5,
                                md: 2,
                            },
                            width: {
                                xs: 240,
                                sm: 300,
                                md: 380,
                            },
                            background: 'none',
                            boxShadow: 'none',
                            color: 'rgb(var(--textColorLight))',
                            fontSize: {
                                xs: 14,
                                sm: 15,
                                md: 16,
                            },
                            }}>
                            <FastForwardIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> The Future
                        </Paper>
                        </div>
                    </div>
                </Paper>
                
        </ThemeProvider>
    
)

export default function GrowAbout() {
    // Set animation to false before component mount:
    const [checked, setChecked] = React.useState(false)

    // Trigger animation on mount:
    useEffect(() => {
        setChecked(true)
    },[])

    return (
        <>
        <Box 
            sx={{ 
                height: 'auto', 
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                zIndex: -10,
            }}
        ></Box>
        <Grow
        in={checked}
        timeout={1000}
        style={{ transformOrigin: 'center center' }}
        >
            <div>
                {aboutPaper}
            </div>
            
        </Grow>
        </>
    );

}