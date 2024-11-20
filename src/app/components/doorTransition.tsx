'use client'
import * as React from 'react';
import { useEffect } from 'react';
import { Grow, Box } from '@mui/material';
import Link from 'next/link'
import doorGlow from '@/app/styles/doorGlow.module.css'


const doorElement = (
    
        <div>
            <div className='w-full flex justify-center'>
                <div className={doorGlow.doorContainer}>
                    <div className={doorGlow.glowingLight}></div>
                    <Link className="relative p-5 text-9xl z-50" href={'/home'}>🚪</Link>
                </div>
            </div>
        </div>
    
)

export default function DoorTransition() {
    const [checked, setChecked] = React.useState(false)

    useEffect(() =>{
        setChecked(true)
    },[])
    return (
        <>
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
        timeout={2000}
        style={{transformOrigin: 'center center'}}
        >{doorElement}
        </Grow>
        </>
    )
}