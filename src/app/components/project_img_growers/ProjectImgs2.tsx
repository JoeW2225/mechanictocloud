import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const lowFidHome = (
  <Paper sx={{width: {xs: 'auto' ,lg:'70vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="https://www.mechanictocloud.com/images/logo.webp"
            alt='blah'
            layout='responsive'
            height={250}
            width={300}
                    />
  </Paper>
);

export default function ProjectTwo() {

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
      </Box>
    </Box>
  );
}