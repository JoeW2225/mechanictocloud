'use client'
import { NavBar } from '../components/NavBar'
import { MobNavBar } from '../components/mobile/MobNavBar';
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import ProjectAccordions from '../components/ProjectAccord';
import containers from '../styles/containers.module.css';
import { useEffect } from 'react';

export default function Projects() {
    useEffect(() => {
        document.title = 'Projects | Mechanic to Cloud'
    })
    return (
        <>
            <NavBar/> <MobNavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
                <main className={containers.projectMain}>
                <div className={containers.accordContainer}>
                        <ProjectAccordions />
                    </div>
                </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-6'>
                <FooterCount/>
            </footer>
            </>
        
    )
}

