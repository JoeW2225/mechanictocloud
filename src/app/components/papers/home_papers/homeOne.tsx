'use client'
import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/system';
import { Grow, Box } from '@mui/material';
import homeTheme from '@/app/styles/homeTheme';
import CloudIcon from '@mui/icons-material/Cloud';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';

const welcomePaper = (
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
                        
                        },
                        // Responsive height:
                        height: {
                        xs: 'auto',
                        
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
                            Welcome to my Portfolio
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
                            <CloudIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> Hosted on AWS
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
                            <CodeIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> Framework Next.js
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
                            <DesignServicesIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> UI library Material UI
                        </Paper>

                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
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
                            <BrushIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> Tailwind & CSS
                        </Paper>
                        </div>
                    </div>
                </Paper>
                
        </ThemeProvider>
    
)

export default function GrowWelcome() {
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
                {welcomePaper}
            </div>
            
        </Grow>
        </>
    );
}