'use client'
import { NavBar } from '../components/NavBar'
import { MobNavBar } from '../components/mobile/MobNavBar';
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import ProjectAccordions from '../components/ProjectAccord';
import paperContainers from '@/app/styles/paperContainers.module.css'

export default function Projects() {
    return (
        <>
            <NavBar/> <MobNavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
                <main>
                <div className={paperContainers.accordContainer}>
                        <ProjectAccordions />
                    </div>
                </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10'>
                <FooterCount/>
            </footer>
            </>
        
    )
}

