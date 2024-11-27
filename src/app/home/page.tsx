'use client'
import { NavBar } from '../components/NavBar'
import { MobNavBar } from '../components/mobile/MobNavBar';
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import containers from '@/app/styles/containers.module.css';
import GrowWelcome from '../components/papers/home_papers/homeOne';
import GrowName from '../components/papers/home_papers/homeTwo';
import GrowIntro from '../components/papers/home_papers/homeThree';


export default function Homepage() {
    return (
        <>
            <NavBar/> <MobNavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
                <main>
                    <div className={containers.pContainer}>
                        <GrowWelcome />
                        <GrowName />
                        <GrowIntro />
                    </div>
                    
                    
                </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10'>
                <FooterCount/>
            </footer>
            </>
        
    )
}

