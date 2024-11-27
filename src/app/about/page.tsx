'use client'
import { NavBar } from '../components/NavBar'
import { MobNavBar } from '../components/mobile/MobNavBar';
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import containers from '@/app/styles/containers.module.css';
import GrowAbout from '../components/papers/about_papers/aboutOne';
import GrowPast from '../components/papers/about_papers/aboutTwo';
import GrowPresent from '../components/papers/about_papers/aboutThree';
import GrowFuture from '../components/papers/about_papers/aboutFour';


export default function About() {
    return (
        <>
            <NavBar/> <MobNavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
                <main>
                    <div className={containers.pContainer}>
                        <GrowAbout />
                        <GrowPast />
                        <GrowPresent />
                        <GrowFuture />
                    </div>
                    
                    
                </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10'>
                <FooterCount/>
            </footer>
            </>
        
    )
}

