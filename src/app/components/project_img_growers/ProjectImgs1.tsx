import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { MechanicToCloudTxt2 } from '@/app/library/proj_accord_content/project1Txt2';
import { MechanicToCloudTxt3 } from '@/app/library/proj_accord_content/project1Txt3';
import { MechanicToCloudTxt4 } from '@/app/library/proj_accord_content/project1Txt4';
import { MechanicToCloudTxt5 } from '@/app/library/proj_accord_content/project1Txt5';
import { MechanicToCloudTxt6 } from '@/app/library/proj_accord_content/project1Txt6';

const drawIoStageOne = (
  <Paper sx={{width: {xs: 'auto' ,lg:'45vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/stageOneHosting.webp"
            alt='Draw.io aws architecture of the services used to host the site'
            style={{ width: '100%', height: 'auto' }}
            height={250}
            width={300}
                    />
  </Paper>
);

const drawIoStageTwo = (
  <Paper sx={{width: {xs: 'auto' ,lg:'45vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/stageTwoCICD.webp"
            alt='Draw.io aws architecture of the services used to host the site'
            style={{ width: '100%', height: 'auto' }}
            height={250}
            width={300}
                    />
  </Paper>
);

const drawIoStageThree = (
  <Paper sx={{width: {xs: 'auto' ,lg:'45vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/stageThreeAPI.webp"
            alt='Draw.io aws architecture of the services used to host the site'
            style={{ width: '100%', height: 'auto' }}
            height={250}
            width={300}
                    />
  </Paper>
);



const lowFidHome = (
  <Paper sx={{width: {xs: 'auto' ,lg:'70vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/okSoHomeDesktop.webp"
            alt='low-detail home page on desktop'
            style={{ width: '100%', height: 'auto' }}
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
            style={{ width: '100%', height: 'auto' }}
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
            style={{ width: '100%', height: 'auto' }}
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
            style={{ width: '100%', height: 'auto' }}
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
          {drawIoStageOne}
          <MechanicToCloudTxt2/>
          {drawIoStageTwo}
          <MechanicToCloudTxt3/>
          {drawIoStageThree}
          <MechanicToCloudTxt4/>
          {lowFidHome}
          {lowFidHomeMob}
          <MechanicToCloudTxt5/>
          {figmaProject}
          {figmaProjectMob}
          <MechanicToCloudTxt6/>
      </Box>
    </Box>
  );
}