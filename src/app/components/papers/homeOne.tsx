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

    
        <ThemeProvider theme={homeTheme}>
                
                <Paper
                    elevation={24}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 1,
                        width: 480,
                        height: 250,
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        fontSize: 30,
                        color: 'rgb(var(--foreground))',
                        background: 'rgba(255, 255, 255, 0.80)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}>
                    Welcome to my Portfolio
                    

                    <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 2,
                            width: 400,
                            background: 'none', 
                            boxShadow: 'none',
                            color: 'rgb(var(--textColorLight))', 
                            fontSize: 16
                            }}>
                            <CloudIcon /> Hosted on AWS
                            <CodeIcon /> Framework Next.js
                        </Paper>
                            
                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 2,
                            width: 380,
                            background: 'none', 
                            boxShadow: 'none', 
                            color: 'rgb(var(--textColorLight))', 
                            fontSize: 16
                            }}>
                            <DesignServicesIcon /> UI library MUI
                            <BrushIcon /> Tailwind & CSS
                        </Paper>
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