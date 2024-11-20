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
                        flexDirection: 'column',
                        margin: 1,
                        width: 400,
                        height: 150,
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        fontSize: 30,
                        color: 'rgb(var(--foreground))',
                        background: 'rgba(255, 255, 255, 0.80)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}>
                        My name is Joe Winter

                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 2,
                            width: 300,
                            background: 'none', 
                            boxShadow: 'none', 
                            color: 'rgb(var(--textColorLight))', 
                            fontSize: 16
                            }}>
                            <LayersIcon />Full-Stack Web Developer
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