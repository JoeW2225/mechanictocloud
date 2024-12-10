'use client'
import { NavBar } from '../components/NavBar'
import { MobNavBar } from '../components/mobile/MobNavBar';
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
// import containers from '@/app/styles/containers.module.css';
import FirstProjectCard from '@/app/components/journal_cards/FirstProject';
import WebsitePlanningCard from '../components/journal_cards/WebsitePlanning';
import WebsiteDesigningCard from '../components/journal_cards/WebsiteDesigning';
import WebsiteSetupCard from '../components/journal_cards/WebsiteSetup';
import WebsiteInitialCard from '../components/journal_cards/WebsiteInitial';
import WebsiteBuildCard from '../components/journal_cards/WebsiteBuild';
import { useEffect } from 'react';

export default function Journal() {
    useEffect(() =>{
        document.title = 'Journal | Mechanic to Cloud'
    },[])
    return (
        <>
            <NavBar/> <MobNavBar/>
            <CloudGroup/>
            <ThemeProvider theme={homeTheme}>
            <main>
      {/* DESKTOP VIEW */}
        <div className='w-full flex justify-center'>
            <div className='hidden sm:block'>
                <FirstProjectCard />
                <WebsiteSetupCard />
            </div>

            <div className='hidden sm:block'>
                <WebsitePlanningCard />
                <WebsiteInitialCard />
            </div>
            
            <div className='hidden sm:block'>
                <WebsiteDesigningCard />
                <WebsiteBuildCard />
            </div>
        </div>

      {/* MOBILE VIEW */}
        <div className="flex flex-col items-center sm:hidden">
            <FirstProjectCard />
            <WebsitePlanningCard />
            <WebsiteDesigningCard />
            <WebsiteSetupCard />
            <WebsiteInitialCard />
            <WebsiteBuildCard />
        </div>
        </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10'>
                <FooterCount/>
            </footer>
            </>
        
    )
}

