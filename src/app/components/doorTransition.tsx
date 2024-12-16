'use client'
import * as React from 'react';
import { useEffect, createContext, useContext } from 'react';
import { Grow, Box } from '@mui/material';
import Link from 'next/link'
import doorGlow from '../styles/doorGlow.module.css'

export const CountContext = createContext<{count: number; increaseCount: () => void;}>
({
    count: 0,
    increaseCount: () => {}
})

export const CountProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [count, setCount] = React.useState(0)
    const increaseCount = () => {
        setCount(count +1)
    }
    return (
        <CountContext.Provider value={{ count, increaseCount }}>
            {children}
        </CountContext.Provider>
    )
}


export const DoorElement = () => {
    const { increaseCount } = useContext(CountContext)
    return (
    
        <div>
            <div className='w-full flex justify-center'>
                <div className={doorGlow.doorContainer}>
                    <div className={doorGlow.glowingLight}></div>
                    <Link className="relative p-5 text-9xl z-50" href={'/home'}>
                    <button onClick={increaseCount}>🚪</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export const DoorTransition = () => {
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
        timeout={5000}
        style={{transformOrigin: 'center center'}}
        >
            <div>
                <DoorElement/>
            </div>
        </Grow>
        </>
    )
}