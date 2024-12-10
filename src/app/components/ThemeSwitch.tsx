'use client'
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() =>  setMounted(true), [])

    if (!mounted) return (
        <Image className='rounded-full'
        src="/images/logo.webp"
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
        />
    )

    return (
        <button
            className="p-1 rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-300 transition-colors"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            {resolvedTheme === 'dark' ? (
                <Brightness3Icon className="style={{color: '#faebd7'}} dark:style={{color: '#faebd7'}} hover:text-gray-800 dark:hover:text-gray-800" />
            ) : (
                <LightModeIcon className="style={{color: '#566056'}} dark:text-gray-200 hover:text-gray-200" />
            )}
        </button>
    )

}