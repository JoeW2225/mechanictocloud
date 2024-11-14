import IconBreadcrumbs from './IconBreadCrumbs'
import Image from 'next/image'
import logo from '@/app/images/logo-removebg.png'

export const NavBar = () => {
    return (
        <nav className='bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 p-3 flex justify-start items-center gap-2'>
            <div className='absolute left-7 w-[59px] h-[59px] bg-white rounded-full z-0'></div>
            <Image className='rounded-full z-10'
            src={logo}
            alt='mechanic to cloud logo'
            height={150}
            width={90}
            />
            <IconBreadcrumbs/>           
        </nav>
    )
}