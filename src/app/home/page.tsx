'use client'
import { NavBar } from '../components/NavBar'
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import PaperWithTheme from '../components/paperTheme';
import homeTheme from '../styles/homeTheme';


export default function Homepage() {
    return (
        <>
            <NavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
                <main>
                    
                    <PaperWithTheme />
                    
                </main>
            </ThemeProvider>
            <footer className='absolute inset-x-0 bottom-0'>
                <FooterCount/>
            </footer>
        </>
    )
}

