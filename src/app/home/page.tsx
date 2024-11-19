'use client'
import { NavBar } from '../components/NavBar'
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import paperContainers from '@/app/styles/paperContainers.module.css'
import WelcomePaper from '../components/papers/homeOne';
import NamePaper from '../components/papers/homeTwo';
import IntroPaper from '../components/papers/homeThree';


export default function Homepage() {
    return (
        <>
            <NavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
                <main>
                    <div className={paperContainers.pContainer}>
                        <WelcomePaper />
                        <NamePaper />
                        <IntroPaper />
                    </div>
                    
                    
                </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10'>
                <FooterCount/>
            </footer>
            </>
        
    )
}

