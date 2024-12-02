'use client'
import { NavBar } from '../components/NavBar'
import { MobNavBar } from '../components/mobile/MobNavBar';
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import containers from '@/app/styles/containers.module.css';
import FirstProjectCard from '@/app/components/journal_cards/FirstProject';
import WebsitePlanningCard from '../components/journal_cards/WebsitePlanning';
import WebsiteDesigningCard from '../components/journal_cards/WebsiteDesigning';
import WebsiteSetupCard from '../components/journal_cards/WebsiteSetup';
import WebsiteInitialCard from '../components/journal_cards/WebsiteInitial';
import WebsiteBuildCard from '../components/journal_cards/WebsiteBuild';

export default function Journal() {
    return (
        <>
            <NavBar/> <MobNavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
                <main>
                    
                        <div className='flex flex-row justify-center'>
                            <div className={containers.cardsContainer}>
                                <FirstProjectCard />
                                <WebsitePlanningCard />
                                <WebsiteDesigningCard />
                                <WebsiteSetupCard />
                                <WebsiteInitialCard />
                                <WebsiteBuildCard />
                            </div>
                        </div>
                </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10'>
                <FooterCount/>
            </footer>
            </>
        
    )
}

