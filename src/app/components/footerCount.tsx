'use client'
import footBlurBg from '@/app/styles/footBlurBg.module.css'
import * as React from 'react';
import { useEffect } from 'react';
import { Grow, Box } from '@mui/material';
import { CountContext } from './doorTransition';

const FooterElement = () => {
    const { count } = React.useContext(CountContext)
    return (
    <footer className={footBlurBg.footContainer}>
            <div className={footBlurBg.footBlur}>
                <div className='flex justify-center items-center platypi p-3'>
                    <h4 className='min-w-min sm: flex justify-center text-sm'>
                        Visitor Count: {count}
                    </h4>
                </div>
            </div>
    </footer>
)}

export const FooterCount = () => {
    const [checked, setChecked] = React.useState(false)

    useEffect(() => {
        setChecked(true)
    },[])

    return (
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
        >
            <div>
                <FooterElement/>
            </div>
            
        </Grow>
        </div>
    )
}