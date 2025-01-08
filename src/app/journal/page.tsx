'use client'
import { NavBar } from '../components/NavBar'
import { MobNavBar } from '../components/mobile/MobNavBar';
import CloudGroup from '../components/CloudGroup';
import { FooterCount } from '../components/footerCount'
import * as React from 'react';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import { useEffect } from 'react';
import { CountProvider } from '../components/doorTransition';
//! Journal card imports in order:
import FirstProjectCard from '../components/journal_cards/FirstProject';
import CRCWebsitePlanningCard from '../components/journal_cards/CRCWebsitePlanning';
import CRCWebsiteDesigningCard from '../components/journal_cards/CRCWebsiteDesigning';
import CRCWebsiteSetupCard from '../components/journal_cards/CRCWebsiteSetup';
import CRCWebsiteInitialCard from '../components/journal_cards/CRCWebsiteInitial';
import CRCWebsiteBuildCard from '../components/journal_cards/CRCWebsiteBuild';
import CRCCloudHosting from '../components/journal_cards/CRCCloudHosting'
import CRCCloudCICD from '../components/journal_cards/CRCCloudCICD'
import CRCCloudAPIVisitor from '../components/journal_cards/CRCCloudAPIVisitor'
import CRCCloudRefection from '../components/journal_cards/CRCCloudReflection'

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
                <CRCWebsiteSetupCard />
                <CRCCloudHosting/>
                <CRCCloudRefection />
            </div>

            <div className='hidden sm:block'>
                <CRCWebsitePlanningCard />
                <CRCWebsiteInitialCard />
                <CRCCloudCICD />
            </div>
            
            <div className='hidden sm:block'>
                <CRCWebsiteDesigningCard />
                <CRCWebsiteBuildCard />
                <CRCCloudAPIVisitor />
            </div>
        </div>

      {/* MOBILE VIEW */}
        <div className="flex flex-col items-center sm:hidden">
            <FirstProjectCard />
            <CRCWebsitePlanningCard />
            <CRCWebsiteDesigningCard />
            <CRCWebsiteSetupCard />
            <CRCWebsiteInitialCard />
            <CRCWebsiteBuildCard />
            <CRCCloudHosting />
            <CRCCloudCICD />
            <CRCCloudAPIVisitor />
            <CRCCloudRefection />
        </div>
        </main>
            </ThemeProvider>
            <footer className='sticky bottom-0 flex justify-center items-center w-full h-20 z-10'>
                <CountProvider>
                    <FooterCount/>
                </CountProvider>
            </footer>
            </>
        
    )
}

