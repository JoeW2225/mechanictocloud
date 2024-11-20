import * as React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaletteIcon from '@mui/icons-material/Palette';
import BungalowIcon from '@mui/icons-material/Bungalow';
import ThemeSwitch from './ThemeSwitch'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function IconBreadcrumbs() {
    return (
    <div>
        <Breadcrumbs aria-label="breadcrumb">

            <Link className='p-1 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors'
                underline="none"
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: "inherit",
                    fontFamily: 'platypi'
                }}
                href="/home">
                <BungalowIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Mechanic to Cloud
            </Link>

            <Link className='p-1 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors'
                underline='none'
                sx={{ display: 'flex', 
                    alignItems: 'center',
                    color: "inherit",
                    fontFamily: 'platypi',
                }}
                href="/about">
                <InfoIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                About
            </Link>

            <Link className='p-1 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors'
                underline="none"
                sx={{ display: 'flex', 
                    alignItems: 'center',
                    color: "inherit",
                    fontFamily: 'platypi',
                }}
                
                href="/projects">
                <PaletteIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Projects
            </Link>

            <Link className='p-1 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors'
                underline="none"
                sx={{ display: 'flex', 
                    alignItems: 'center',
                    color: "inherit",
                    fontFamily: 'platypi',
                }}
                href="/journal">
                <LibraryBooksIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Journal
            </Link> 
            <div>
            <a className='p-2 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors' href='https://www.linkedin.com/in/joe-winter24/'><LinkedInIcon /></a>
            <a className='p-2 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors' href='https://github.com/JoeW2225'><GitHubIcon /></a>
            </div>
            <ThemeSwitch/>
        </Breadcrumbs>
        
    </div>
    );
}