'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/system';
import homeTheme from '@/app/styles/homeTheme';
import ArticleIcon from '@mui/icons-material/Article';
import { Introduction } from '@/app/library/introTxt';
import VerticalDivider from'@/app/components/paragDivider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IntroductionTwo } from '@/app/library/introTxtTwo';


const IntroPaper = () => {

    return (
        <ThemeProvider theme={homeTheme}>
            
                
                <Paper
                    elevation={24}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 1,
                        width: 900,
                        height: 300,
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        fontSize: 30,
                        color: 'rgb(var(--foreground))',
                        background: 'rgba(255, 255, 255, 0.80)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                    }}>
                        Here&#39;s my introduction

                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            gap: 2,
                            width: 800,
                            boxShadow: 'none',
                            backgroundColor: 'transparent', 
                            color: 'rgb(var(--textColorLight))', 
                            fontSize: 16
                            }}>
                            <ArticleIcon />
                            <Introduction />
                            <VerticalDivider />
                            <PersonAddIcon />
                            <IntroductionTwo />
                        </Paper>
                    
                </Paper>
            
        </ThemeProvider>
    );
};

export default IntroPaper