import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from 'next/image';

const Logo = (
  <Paper sx={{width: 250, borderRadius: '16px', margin: 1}} elevation={4}>
    <Image className='rounded-xl sm:w-[450px]'
            src="/images/logo.webp"
            alt='blah'
            height={350}
            width={150}
                    />
  </Paper>
);

export default function ProjectTwoGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 350 }}>
      <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontFamily: 'platypi', color: 'rgb(var(--foreground))'}}}
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{Logo}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {Logo}
        </Grow>
      </Box>
    </Box>
  );
}