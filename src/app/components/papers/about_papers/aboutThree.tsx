'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grow, Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import homeTheme from '../../../styles/homeTheme';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import * as HorizontalDivider from '../../paragDividerH';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { PresentOne } from '../../../library/about_paper_content/aboutTxtSix';
import { PresentTwo } from '../../../library/about_paper_content/aboutTxtSeven';

const presentPaper = (

        <ThemeProvider theme={homeTheme}>
            
                
            <Paper
                    elevation={24}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: {
                            xs: 'column',
                        },
                        margin: 1,
                        padding: 3,
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
                                xs: 'auto',
                                
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
                            }} />
                            <PresentOne />
                        </Paper>

                        <HorizontalDivider.HorizDividerLg />

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
                                xs: 'auto'
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