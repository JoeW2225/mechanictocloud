'use client'
import * as React from 'react';
import { useEffect } from 'react';
import { Grow, Box } from '@mui/material';

const titleElement = (
    <div>
        <div className='flex justify-center my-20 w-full'>
            <h1 className="flex relative justify-center p-5 h-[10vh] items-center platypi text-3xl bg-frosted-bg shadow-frosted-glass rounded-xl backdrop-blur-md sm:text-5xl min-w-min" >Mechanic to Cloud</h1>
        </div>
    </div>
)

export default function TitleTransition() {
    const [checked, setChecked] = React.useState(false)

    useEffect(() => {
        setChecked(true)
    },[])

    return(
        <div>
        <Box
        sx={{ 
                height: 'auto', 
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                zIndex: -10,
            }}>
        </Box>
        <Grow
        in={checked}
        timeout={3000}
        style={{transformOrigin: 'center center'}}
        >{titleElement}
        </Grow>
        </div>
    )
}

