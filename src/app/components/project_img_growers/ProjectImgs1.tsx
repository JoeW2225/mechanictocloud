import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const lowFidHome = (
  <Paper sx={{width: {xs: 'auto' ,lg:'70vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/okSoHomeDesktop.webp"
            alt='low-detail home page on desktop'
            layout='responsive'
            height={250}
            width={300}
                    />
  </Paper>
);

const lowFidHomeMob = (
  <Paper sx={{ width: {xs: 'auto' ,lg:'40vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/okSoHomeMob.webp"
            alt='low-detail home page on mobile'
            layout='responsive'
            height={350}
            width={500}
                    />
  </Paper>
)

const figmaProject = (
  <Paper sx={{width: {xs: 'auto' ,lg:'70vw'}, borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/figmaProj.webp"
            alt='high-detail projects page on desktop'
            layout='responsive'
            height={450}
            width={300}
                    />
  </Paper>
)

const figmaProjectMob = (
  <Paper sx={{width: {xs: 'auto' ,lg:'40vw'} ,borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/figmaProjMob.webp"
            alt='high-detail projects page on mobile'
            layout='responsive'
            height={450}
            width={300}
                    />
  </Paper>
)

export default function ProjectOne() {

  return (
    <Box>
      <Box sx={{ 
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'column'
        },
        alignItems: 'center',
        
        }}>
          {lowFidHome}
          {lowFidHomeMob}
          {figmaProject}
          {figmaProjectMob}
      </Box>
    </Box>
  );
}