import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MobThemeSwitch from './MobThemeSwitch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MobCrumbs() {
    return (
    <div>
        <Breadcrumbs aria-label="breadcrumb">
            
            <div>
            <a className='p-2 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors' href='https://www.linkedin.com/in/joe-winter24/'><LinkedInIcon /></a>
            <a className='p-2 rounded-lg hover:bg-blue-200 dark:hover:bg-white transition-colors' href='https://github.com/JoeW2225'><GitHubIcon /></a>
            </div>
            <MobThemeSwitch/>
        </Breadcrumbs>
        
    </div>
    );
}