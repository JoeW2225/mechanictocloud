import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from 'next/image';

const lighthouse = (
  <Paper sx={{borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-[450px]'
            src="/images/testImg3.webp"
            alt='blah'
            height={350}
            width={300}
                    />
  </Paper>
);

const buildings = (
  <Paper sx={{width: 200 ,borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-[450px]'
            src="/images/testImg2.webp"
            alt='blah'
            height={350}
            width={300}
                    />
  </Paper>
)

const mountain = (
  <Paper sx={{width: 400 ,borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-[450px]'
            src="/images/testImg4.webp"
            alt='blah'
            height={450}
            width={300}
                    />
  </Paper>
)

export default function ProjectOneGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ 
      height: {
        xs: 850,
        lg: 350
      } 
      }}>
      <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontFamily: 'platypi', color: 'rgb(var(--foreground))'}}}
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ 
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row'
        }
        
        }}>
        <Grow in={checked}>{lighthouse}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {buildings}
        </Grow>
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 2000 } : {})}
        >
          {mountain}
        </Grow>
      </Box>
    </Box>
  );
}