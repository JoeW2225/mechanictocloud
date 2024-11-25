'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grow, Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import homeTheme from '@/app/styles/homeTheme';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import VerticalDivider from'@/app/components/paragDivider';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { PresentOne } from '@/app/library/aboutTxtSix';
import { PresentTwo } from '@/app/library/aboutTxtSeven';


const presentPaper = (

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
                        padding: 3,
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
                            md: 150,
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
                        The Present
                    
                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            marginTop: 3,
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
                            <ArchitectureIcon sx={{
                                
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> <PresentOne />
                        </Paper>

                        <VerticalDivider />

                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
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
                            <TrendingUpIcon sx={{
                                
                                fontSize: {
                                xs: '1.2rem',
                                sm: '1.3rem',
                                md: '1.5rem',
                                }
                            }} /> <PresentTwo />
                        </Paper>
                        



                        
                </Paper>
            
        </ThemeProvider>
    
)

export default function GrowPresent() {
    const [checked, setChecked] = React.useState(false)

    useEffect(() => {
        setChecked(true)
    },[])
    return (
        <>
        <Box sx={{
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
        timeout={3000}
        style={{transformOrigin: 'center center'}}
        >
            <div>
                {presentPaper}
            </div>
        </Grow>
        </>
    )
}