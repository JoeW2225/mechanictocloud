import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const lowFidHome = (
  <Paper sx={{width: {xs: 'auto' ,lg:'25vw'} , borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-full'
            src="/images/logo.webp"
            alt='blah'
            style={{ width: '100%', height: 'auto' }}
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