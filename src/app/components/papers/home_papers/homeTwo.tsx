'use client'
import * as React from 'react';
import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/system';
import { Grow, Box } from '@mui/material';
import homeTheme from '@/app/styles/homeTheme';
import LayersIcon from '@mui/icons-material/Layers';


const namePaper = (

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
                        My name is Joe Winter

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
                            <LayersIcon sx={{ 
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> Full-Stack Web Developer
                        </Paper>
                    
                </Paper>
            
        </ThemeProvider>
    
)

export default function GrowName() {
    const [checked, setChecked] = React.useState(false)

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
            }}>
            </Box>
            <Grow
            in={checked}
            timeout={2000}
            style={{transformOrigin: 'center center'}}
            >
                <div>
                    {namePaper}
                </div>
                </Grow>
        </>
    )
}