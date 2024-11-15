import IconBreadcrumbs from './IconBreadCrumbs'
import Image from 'next/image'
import logo from '@/app/public/images/logo-removebg.png'
import navBlurBg from '@/app/styles/navBlurBg.module.css'

export const NavBar = () => {
    return (
        <header className={navBlurBg.navContainer}>
        <div className={navBlurBg.navBlur}>
        <nav className='flex justify-start items-center p-3 gap-2'>
            <div className='absolute left-7 w-[58.3px] h-[59px] bg-white rounded-full z-0'></div>
            <Image className='rounded-full z-10'
            src={logo}
            alt='mechanic to cloud logo'
            height={150}
            width={90}
            />
            <IconBreadcrumbs/>           
        </nav>
        </div>
        </header>
    )
}