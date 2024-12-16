import Image from 'next/image'
import navBlurBg from '../../styles/navBlurBg.module.css'
import MobCrumbs from './MobCrumbs'
import BurgerMenu from './Burgermenu'

export const MobNavBar = () => {
    return (
        <header className={navBlurBg.navContainer}>
        <div className={navBlurBg.navBlur}>
        <nav className='flex justify-start items-center p-2 gap-2 sm:hidden'>
            <div className='absolute left-[4.7rem] w-[47.3px] h-[45px] bg-white rounded-full z-0'></div>
            <BurgerMenu/>
            <Image className='rounded-full z-10'
            src="/images/logo-removebg.png"
            alt='mechanic to cloud logo'
            height={150}
            width={70}
            />
            <MobCrumbs/>
        </nav>
        </div>
        </header>
    )
}